const income = require('../income');

let dataSueldo ={
    'name': 'sueldo',
    'amount': 600,
    'date' : '2021-10-07',
    'currency' : 'UYU',
    'monthly' : true
};
let sueldo = new income(dataSueldo);
test('check creation of income',()=>{
    expect(sueldo.name).toBe('sueldo');
    expect(sueldo.amount).toBe(600);
    expect(sueldo.date.getTime()).toBe(new Date('2021-10-07').getTime());
    expect(sueldo.currency).toBe('UYU');
    expect(sueldo.isMonthly).toBe(true);
    expect(sueldo.type).toBe('Income');
});