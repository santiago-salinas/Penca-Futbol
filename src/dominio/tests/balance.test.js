const { TestWatcher } = require('@jest/core');
const Balance = require('../balance');
const Income = require('../income');
const Expense = require('../expense');
const Saving = require('../saving');

let cuenta = new Balance();
let dataSueldo = {
    'name': 'Sueldo',
    'amount': 600,
    'date' : '2021-10-07',
    'currency' : 'UYU',
    'monthly' : false
};
let dataSueldo2 ={
    'name': 'Sueldo2',
    'amount': 40,
    'date' : '2021-10-07',
    'currency' : 'UYU',
    'monthly' : false
};
let dataSueldo3 ={
    'name': 'Sueldo',
    'amount': 600,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'monthly' : false
};
let dataExpense ={
    'name': 'renner',
    'amount': 200,
    'date' : '2021-10-09',
    'cateogry' : 'Ropa',
    'currency' : 'UYU',
    'monthly' : false
};
let dataExpense2 ={
    'name': 'renner2',
    'amount': 30,
    'date' : '2021-10-09',
    'cateogry' : 'Ropa',
    'currency' : 'UYU',
    'monthly' : false
};
let sueldo = new Income(dataSueldo);
let sueldo2 = new Income(dataSueldo2);
let sueldo3 = new Income(dataSueldo3);
let renner = new Expense(dataExpense);
let renner2 = new Expense(dataExpense2);

//check balance money
test('add income to balance',() => {
    cuenta.addIncomeToBalance(sueldo.getIncome());
    expect(cuenta.getBalanceMoney()).toBe(600)
});
test('add expense to balance',() =>{
    cuenta.addExpenseToBalance(renner.getExpense());
    expect(cuenta.getBalanceMoney()).toBe(400);
});
//check balance lists
test('check income array list',()=>{
    expect(cuenta.getIncomeList().length).toBe(1)
});
test('check expense array list',()=>{
    expect(cuenta.getExpensesList().length).toBe(1)
});
//delete income tests

test('check delete wrong income from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo2);
    expect(cuenta.getIncomeList().length).toBe(1);
});
test('check delete wrong income by date from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo3);
    expect(cuenta.getIncomeList().length).toBe(1);
});
test('check delete correct income from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo.getIncome());
    expect(cuenta.getIncomeList().length).toBe(0);
});
//delete expense tests
test('check delete wrong expense from balance',() =>{
    cuenta.deleteExpenseFromList(renner2.getExpense());
    expect(cuenta.getExpensesList().length).toBe(1);
});
test('check delete correct expense from balance',() =>{
    cuenta.deleteExpenseFromList(renner.getExpense());
    expect(cuenta.getExpensesList().length).toBe(0);
});
//saving tests
let dataSaving ={
    'name': 'saving',
    'amount': 30,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'monthly' : false
};
let dataSaving2 ={
    'name': 'saving2',
    'amount': 30,
    'date' : '2021-11-09',
    'currency' : 'UYU',
    'monthly' : false
};
let saving = new Saving(dataSaving);
let saving2 = new Saving(dataSaving2);

test('check add saving',()=>{
    cuenta.addSavingToList(saving.getSaving());
    expect(cuenta.getSavingList().length).toBe(1);
});

test('check saving balance',()=>{
    expect(cuenta.getSavingMoney()).toBe(30);
});
test('delete wrong saving from balance',()=>{
    cuenta.deleteSavingFromList(saving2);
    expect(cuenta.getSavingList().length).toBe(1);
});

test('check monthly cleanup',()=> {
    cuenta.addExpenseToBalance(renner2);
    cuenta.addSavingToList(saving2);
    cuenta.monthlyCleanup()
    expect(cuenta.getExpensesList().length).toBe(0);
    expect(cuenta.getIncomeList().length).toBe(0);
    expect(cuenta.getSavingList().length).toBe(1);
});