import Expense from "../../dominio/expense"
import Income from "../../dominio/income";
import Balance from "../../dominio/balance";
import Saving from "../../dominio/saving";

export const changeVisibleSection = (target) => {
    document.querySelector('section.full-screen.active')?.classList.remove('active');
    document.querySelector(`section#${CSS.escape(target)}`)?.classList.add('active');
};

export const openFabSpeedDial = (fabButton) => {
    fabButton.classList.toggle('close');
    let income = document.querySelector('.mdc-fab.income');
    let expense = document.querySelector('.mdc-fab.expense');
    income.classList.toggle('fade-in');
    expense.classList.toggle('fade-in');  
};

export const addEventBalanceButtons = (fabButton) => {
    let income = document.querySelector('.mdc-fab.income');
    let expense = document.querySelector('.mdc-fab.expense');
    income.addEventListener('click', (event) => {
        changeVisibleSection('Ingreso');
        changeAppTitle('Ingreso');
        openFabSpeedDial(fabButton);
    });
    expense.addEventListener('click', (event) => {
        changeVisibleSection('Gasto');
        changeAppTitle('Gasto');
        openFabSpeedDial(fabButton);
    });
}

export const changeMenuIcon = (topAppBarElement,drawer) => {
    let iconContainer = topAppBarElement.getElementsByClassName('mdc-top-app-bar__navigation-icon')[0];
    let icon = iconContainer.innerHTML;
    iconContainer.innerHTML = (icon == 'menu') ? 'arrow_back' : 'menu';
    drawer.open = !drawer.open;
};

export const changeAppTitle = (newTitle) => {
    let appTitle = document.getElementsByClassName('mdc-top-app-bar__title')[0];
    appTitle.innerHTML = newTitle;

};

const updateListTransactions = (list) => {
    var container = document.querySelector(`#Historial #${list[0].type.toLowerCase()} .content .history-container`);
    container.innerHTML = '';
    getSortedTransactions(list).forEach((element) => {
        let category = '';
        if (element.category !== undefined){category = `<div class="category">${element.category}</div>`}
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry slide-in">\
            <div class="image-placeholder">\
                <div class="circle">${element.name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount ${element.type.toLowerCase()}">$${element.amount} </div>\
                <div class="item-name">${element.name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date ${element.type.toLowerCase()}">${element.date.getDate()}/${element.date.getMonth()+1}/${element.date.getFullYear()}</div>\
                ${category}\
            </div>\
        </div>`;
        container.appendChild(entry)
    });
}
const updateSummary = (list) => {
    let sortedAll = getSortedTransactions(list);
    var containerSumary = document.querySelector(`#Inicio .summary`);
    containerSumary.innerHTML = '';
    for (let index = 0; index < 5; index++) {
        let category = '';
        if (sortedAll[index].category !== undefined){category = `<div class="category">${sortedAll[index].category}</div>`}
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry slide-in">\
            <div class="image-placeholder">\
                <div class="circle">${sortedAll[index].name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount ${sortedAll[index].type.toLowerCase()}">$${sortedAll[index].amount} </div>\
                <div class="item-name">${sortedAll[index].name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date ${sortedAll[index].type.toLowerCase()}">${sortedAll[index].date.getDate()}/${sortedAll[index].date.getMonth()+1}/${sortedAll[index].date.getFullYear()}</div>\
                ${category}\
            </div>\
        </div>`;
        containerSumary.appendChild(entry);
    }
}
const updateSavings = (list) => {
    let sortedAll = getSortedTransactions(list);
    var containerSavings = document.querySelector(`#Ahorros .saving-container`);
    containerSavings.innerHTML = '';
    sortedAll.forEach((element) => {
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry slide-in">\
            <div class="image-placeholder">\
                <div class="circle">${element.name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount income">$${element.amount} </div>\
                <div class="item-name">${element.name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date income">${element.date.getDate()}/${element.date.getMonth()+1}/${element.date.getFullYear()}</div>\
            </div>\
        </div>`;
        containerSavings.appendChild(entry);
    });
}

//update the history list
export const updateHistory = (incomes,expenses,savings) => {
    updateListTransactions(incomes);
    updateListTransactions(expenses);
    updateSummary(incomes.concat(expenses));
    updateSavings(savings)
};

export const getExpenseData = (page,category,checkbox) => {
    let name = page.querySelector('.mdc-text-field #name');
    let amount = page.querySelector('.mdc-text-field #amount');
    let date = page.querySelector('.mdc-text-field #date');
    if (verifyForm(name,amount,date,category)){
        let expenseData= []
        expenseData['name'] = name.value;
        expenseData['amount'] = parseInt(amount.value);
        expenseData['date'] = date.value + 'T00:00-0800';
        expenseData['monthly'] = checkbox.checked;
        expenseData['category'] = category.value;
        cleanInput(name, amount, date, checkbox, category);
        return expenseData;
    } else {
        alert('Ingrese todos los datos');
    }  
  }
export const getIncomeData = (page,checkbox) => {
    let name = page.querySelector('.mdc-text-field #name');
    let amount = page.querySelector('.mdc-text-field #amount');
    let date = page.querySelector('.mdc-text-field #date');
    if (verifyForm(name,amount,date)){
        let incomeData= []
        incomeData['name'] = name.value;
        incomeData['amount'] = parseInt(amount.value);
        incomeData['date'] = date.value + 'T00:00-0800';
        incomeData['monthly'] = checkbox.checked;
        cleanInput(name, amount, date, checkbox);
        return incomeData;
    } else {
        alert('Ingrese todos los datos');
    }  
  }

export const getSavingData = (page,checkbox) => {
    let name = page.querySelector('.mdc-text-field #name');
    let amount = page.querySelector('.mdc-text-field #amount');
    let date = page.querySelector('.mdc-text-field #date');
    if (verifyForm(name,amount,date)){
        let savingData= []
        savingData['name'] = name.value;
        savingData['amount'] = parseInt(amount.value);
        savingData['date'] = date.value + 'T00:00-0800';
        savingData['monthly'] = checkbox.checked;
        cleanInput(name, amount, date, checkbox);
        return savingData;
    } else {
        alert('Ingrese todos los datos');
    }  
    
  }

export const getSortedTransactions = (list) => {
    return list.sort((a,b) => b.date - a.date)
};
export const getSortedTransactionsByTime = (list) => {
    return list.sort((a,b) => a.date - b.date)
};

export const getTotalExpenses = (expensesList) => {
    let total = 0;
    expensesList.forEach((expense) => {
        total += expense.amount;
    });
    return total;
}

export const updateTotalExpenses = (expensesList) => {
   let container = document.querySelector('#Inicio .container .amount');
   container.innerText = `$${getTotalExpenses(expensesList).toLocaleString("es-US")}`;
}

export const updateTotalSavings = (cuenta) => {
    let container = document.querySelector('#Ahorros .balance-container .balance-amount');
    container.innerText = `$${cuenta.getSavingMoney().toLocaleString("es-US")}`;
 }


export const cleanInput = (name, amount, date, monthly, category = undefined) => {
    name.value = '';
    amount.value = '';
    date.value = '';
    monthly.checked = false;
    if (typeof category !== 'undefined') category.selectedIndex = -1;
};

export const verifyForm = (name, amount, date, category = undefined) => {
    let isValid = true;
    if (!name.value){name.parentElement.classList.add('mdc-text-field--invalid'); isValid = false;}
    if (!amount.value){amount.parentElement.classList.add('mdc-text-field--invalid'); isValid = false;}
    if (!date.value){date.closest('label').classList.add('mdc-text-field--invalid'); isValid = false;}
    if (typeof category !== 'undefined' && category.value == ''){category.valid = false; isValid = false;}
    return isValid;    
}

export const displayBalance = (balance) => {
    let container = document.querySelector('.balance-amount');
    container.innerText =`$${balance.getBalanceMoney().toLocaleString("es-US")}`;
}

export const setTestData = () => {
    let cuenta = new Balance;
    let dataSueldo ={
        'name': 'Sueldo','amount': 60000,'date' : '2021-10-07','currency' : 'UYU','monthly' : true
    };
    let dataDevolucion ={
        'name': 'Devolucion','amount': 50,'date' : '2021-10-07','currency' : 'UYU','monthly' : true
    };
    let dataTransferencia ={
        'name': 'Transferencia','amount': 50,'date' : '2021-10-07','currency' : 'UYU','monthly' : true
    };
    let dataRopa ={
        'name': 'Renner','amount': 200,'date' : '2021-10-09','currency' : 'UYU','category' : 'Ropa','monthly' : true
    };
    let dataComida ={
        'name': 'Comida','amount': 50,'date' : '2021-10-09','currency' : 'UYU','category' : 'Comida','monthly' : true
    };
    let dataTransporte ={
        'name': 'Transporte','amount': 100,'date' : '2021-10-09','currency' : 'UYU','category' : 'Transporte','monthly' : true
    };
    let dataHogar ={
        'name': 'Agua y luz','amount': 2000,'date' : '2021-10-09','currency' : 'UYU','category' : 'Hogar','monthly' : true
    };
    let dataSalidas ={
        'name': 'Salidas','amount': 400,'date' : '2021-10-09','currency' : 'UYU','category' : 'Salidas','monthly' : true
    };
    let dataOtros ={
        'name': 'Supermercado','amount': 4000,'date' : '2021-10-09','currency' : 'UYU','category' : 'Otros','monthly' : true
    };
    let dataFacturas ={
        'name': 'Tarjeta','amount': 400,'date' : '2021-10-09','currency' : 'UYU','category' : 'Facturas','monthly' : true
    };
    let dataTecnologias ={
        'name': 'Cables','amount': 400,'date' : '2021-10-09','currency' : 'UYU','category' : 'Tecnologias','monthly' : true
    };
    let sueldo = new Income(dataSueldo);
    cuenta.addIncomeToBalance(sueldo);
    let sueldo2 = new Income(dataDevolucion);
    cuenta.addIncomeToBalance(sueldo2);
    let sueldo3 = new Income(dataTransferencia);
    cuenta.addIncomeToBalance(sueldo3);
    let renner = new Expense(dataRopa);
    cuenta.addExpenseToBalance(renner);
    let renner2 = new Expense(dataComida);
    cuenta.addExpenseToBalance(renner2);
    let renner3 = new Expense(dataTransporte);
    cuenta.addExpenseToBalance(renner3);
    let renner4 = new Expense(dataHogar);
    cuenta.addExpenseToBalance(renner4);
    let renner5 = new Expense(dataSalidas);
    cuenta.addExpenseToBalance(renner5);
    let renner6 = new Expense(dataOtros);
    cuenta.addExpenseToBalance(renner6);
    let renner7 = new Expense(dataFacturas);
    cuenta.addExpenseToBalance(renner7);
    let renner8 = new Expense(dataTecnologias);
    cuenta.addExpenseToBalance(renner8);
    let dataSaving ={
        'name': 'Saving','amount': 5000,'date' : '2021-10-09','currency' : 'UYU','monthly' : true
    };
    cuenta.addSavingToList(new Saving(dataSaving));
    let dataSaving2 ={
        'name': 'Saving','amount': 5000,'date' : '2021-10-09','currency' : 'UYU','monthly' : true
    };
    cuenta.addSavingToList(new Saving(dataSaving2));
    return cuenta;
}