const expense = require('../expense');

let dataExpense ={
    'name': 'renner',
    'amount': 200,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'category' : 'Ropa',
    'monthly' : true
};
let gasto = new expense(dataExpense);
test('check creation of income',()=>{
    expect(gasto.name).toBe('renner');
    expect(gasto.amount).toBe(200);
    expect(gasto.date.getTime()).toBe(new Date('2021-10-09').getTime());
    expect(gasto.currency).toBe('UYU');
    expect(gasto.category).toBe('Ropa')
    expect(gasto.isMonthly).toBe(true);
    expect(gasto.type).toBe('Expense');
})
