import "./styles/index.scss";
import { changeVisibleSection, openFabSpeedDial, changeMenuIcon, addEventBalanceButtons,
  updateHistory, changeAppTitle, cleanInput, getExpenseData, getIncomeData, displayBalance, updateTotalExpenses, setTestData,
getSavingData, updateTotalSavings} from './utils';
import { setData, myChart } from "./chart";
import cleanupCron from "./cron";
import Expense from "../../dominio/expense"
import Income from "../../dominio/income";
import Balance from "../../dominio/balance";
import Saving from "../../dominio/saving";
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';


const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const checkboxIncome = new MDCCheckbox(document.querySelector('.mdc-checkbox#income'));
const checkboxExpense = new MDCCheckbox(document.querySelector('.mdc-checkbox#expense'));
const checkboxSaving = new MDCCheckbox(document.querySelector('.mdc-checkbox#saving'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
const edtTexts = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new MDCTextField(el);
});
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
//iconButtonRipple.unbounded = true;
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const list = MDCList.attachTo(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
//list 
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
// FAB 
let fabButton = document.querySelector('.mdc-fab.menu')
fabButton.addEventListener('click', (event) => {
  openFabSpeedDial(fabButton);
});
addEventBalanceButtons(fabButton);

//drawer toggle from app bar
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  changeMenuIcon(topAppBarElement,drawer);
});


//close drawer on element click
const listEl = document.querySelector('.mdc-drawer .mdc-deprecated-list');
const mainContentEl = document.querySelector('.main-content');
listEl.addEventListener('click', (event) => {
  updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList());
  changeMenuIcon(topAppBarElement,drawer);
  displayBalance(cuenta)
  var target = event.target;
  drawer.open = false;
  let appTitle = document.getElementsByClassName('mdc-top-app-bar__title')[0];
  document.getElementsByClassName('mdc-list-item--activated')[0].classList.remove("mdc-list-item--activated");
  target.classList.add("mdc-list-item--activated");
  changeAppTitle(target.querySelector('.mdc-deprecated-list-item__text').innerText);
  changeVisibleSection(appTitle.innerText);
});

// test data
let cuenta = setTestData();

document.getElementById('save-expense').addEventListener('click', function (){
  let expenseData = getExpenseData(document.querySelector('section#Gasto'),select,checkboxExpense);
  if (typeof expenseData !== 'undefined'){
    let expense = new Expense(expenseData);
    cuenta.addExpenseToBalance(expense);
    changeVisibleSection('Historial');
    updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList());
    setData(cuenta.getExpensesList());
    updateTotalExpenses(cuenta.getExpensesList())
  }
});

document.getElementById('save-income').addEventListener('click', function (){
  let incomeData = getIncomeData(document.querySelector('section#Ingreso'),checkboxIncome);
  if (typeof incomeData !== 'undefined'){
    let income = new Income(incomeData);
    cuenta.addIncomeToBalance(income);
    changeVisibleSection('Historial');
    updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList());
  }

});

document.getElementById('save-saving').addEventListener('click', function (){
  let savingData = getSavingData(document.querySelector('section#Ahorros'),checkboxSaving);
  if (typeof savingData !== 'undefined'){
    let saving = new Saving(savingData);
    cuenta.addSavingToList(saving);
    updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList());
    updateTotalSavings(cuenta);
  }
});

let contentEls = document.querySelectorAll('#Historial .tab-content');
tabBar.listen('MDCTabBar:activated', function(event) {
  document.querySelector('.tab-content.active').classList.remove('active');
  contentEls[event.detail.index].classList.add('active');
  updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList());
});

setData(cuenta.getExpensesList());
updateTotalExpenses(cuenta.getExpensesList());
updateTotalSavings(cuenta);
displayBalance(cuenta);
updateHistory(cuenta.getIncomeList(),cuenta.getExpensesList(),cuenta.getSavingList())


