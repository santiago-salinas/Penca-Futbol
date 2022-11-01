const Saving = require('../saving');

let dataSaving ={
    'name': 'saving',
    'amount': 30,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'monthly' : true
};
let saving = new Saving(dataSaving);
test('check creation of saving',()=>{
    expect(saving.name).toBe('saving');
    expect(saving.amount).toBe(30);
    expect(saving.date.getDate()).toBe(new Date('2021-10-09').getDate());
    expect(saving.currency).toBe('UYU');
    expect(saving.isMonthly).toBe(true);
    expect(saving.type).toBe('Saving');
})
