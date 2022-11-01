class Expense {

	constructor(dataArray) {
		this.name = dataArray['name'];
        this.amount = dataArray['amount'];
        this.date = new Date(dataArray['date']);
        this.currency = dataArray['currency'];
        this.category = dataArray['category'];
        this.isMonthly = dataArray['monthly'];
        this.type = 'Expense';
	}

	getExpense() {
		return {
		name: this.name,
        amount: this.amount,
        date: this.date,
        currency: this.currency,
        category: this.category,
        isMonthly: this.isMonthly,
		};
	}
  
}

module.exports = Expense;
  