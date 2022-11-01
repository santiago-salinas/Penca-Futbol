class Balance {
	constructor() {
        this.balanceMoney = 0;
        this.savingMoney = 0;
		this.expensesList = [];
        this.incomeList = [];
        this.savingList = [];
	}

	getBalanceMoney() {
		return this.balanceMoney;
	}
    getSavingMoney(){
        return this.savingMoney;
    }
    getExpensesList(){
        return this.expensesList;
    }
    getIncomeList(){
        return this.incomeList;
    }
    getSavingList(){
        return this.savingList;
    }

    addExpenseToBalance(expense) {
        this.expensesList.push(expense);
        this.balanceMoney -= expense.amount;
    }
    addIncomeToBalance(income) {
        this.incomeList.push(income);
        this.balanceMoney += income.amount;
    }
    addSavingToList(saving){
        this.savingList.push(saving);
        this.savingMoney += saving.amount;
    }
    deleteIncomeFromList(incomeToDelete){
        this.deleteAux(this.incomeList,incomeToDelete);
        this.balanceMoney -= incomeToDelete.amount;
    }
    deleteExpenseFromList(expenseToDelete){
        this.deleteAux(this.expensesList,expenseToDelete);
        this.balanceMoney += expenseToDelete.amount;

    }
    deleteSavingFromList(savingToDelete){
        this.deleteAux(this.savingList,savingToDelete);
        this.savingMoney -= savingToDelete.amount;
    }
    deleteAux(list,elementToDelete){
        //iterate through the list
        let elementDeleted = false;
        for(let i = 0; i < list.length && !elementDeleted; i++){
            let element = list[i];
            let shouldDelete = true;
            
            //iterate through the element
            Object.keys(elementToDelete).every(key => {
                if(key == 'date'){
                    if(elementToDelete[key].getTime() == element[key].getTime()){
                        return true;
                    }
                    else{
                        shouldDelete = false;
                        return false;
                    }
                }
                else{
                    if(elementToDelete[key] == element[key]){
                        return true
                    }
                    else{
                        shouldDelete = false;
                        return false;
                    }
                }
            });
            if(shouldDelete){
                list.splice(i,1);
                elementDeleted = true;
                break;
            }
        }   
    }
    monthlyCleanup(){
        this.objectCleanup(this.getExpensesList(),'expense');
        this.objectCleanup(this.getSavingList(),'saving');
        this.objectCleanup(this.getIncomeList(),'income');

    }
    objectCleanup(list,type){
        for(let i = list.length-1; i >= 0; i--){
            let today = new Date();
            let element = list[i];
            if(!element.isMonthly && (element.date.getMonth() != today.getMonth())){
                switch(type){
                    case 'expense' :
                        this.deleteExpenseFromList(element);
                    case 'saving' : 
                        this.deleteSavingFromList(element);
                    case 'income' : 
                        this.deleteIncomeFromList(element);
                }
            }
        }
    }
}
module.exports = Balance;
  
