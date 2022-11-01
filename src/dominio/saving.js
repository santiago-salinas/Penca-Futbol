class Saving {
    constructor(dataArray){
        this.name = dataArray['name'];
        this.amount = dataArray['amount'];
        this.date = new Date(dataArray['date']);
        this.currency = dataArray['currency'];
        this.isMonthly = dataArray['monthly'];
        this.type = 'Saving';
    }
    getSaving() {
		return {
		name: this.name,
        amount: this.amount,
        date: this.date,
        currency: this.currency,
        isMonthly: this.isMonthly,
        type: 'Saving',
		};
	}
}
module.exports = Saving;