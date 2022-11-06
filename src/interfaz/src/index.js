import "./styles/index.scss";
//Card JavaScript instantiation
import {MDCRipple} from '@material/ripple';
import Sistema from "../../dominio/sistema";
import Partido from "../../dominio/partido";

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
//Card End

//Tab
import {MDCTabBar} from '@material/tab-bar';
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
//Tab end

//Datos de prueba
let instancia = new Sistema;
let partido001 = new Partido({ 'identificador': '001',  'equipo1': 'Uruguay', 'equipo2': 'Ghana',  'prediccion': true,  'prediccion1': 1,   'prediccion2': 2,'fecha': 'Martes 13','type': 'Partido'});
let partido002 = new Partido({ 'identificador': '002',  'equipo1': 'Uruguay', 'equipo2': 'México',  'prediccion': false,  'prediccion1': 3,   'prediccion2': 4,'fecha': 'Martes 23','type': 'Partido'});


instancia.addPartido(partido001);
instancia.addPartido(partido002);



const updatePartidos  = (listaPartidos) => {
  var container = document.querySelector(".container");
    container.innerHTML = ''; //esto limpia 
    listaPartidos.forEach((partido) => {
        let cartaPartido = document.createElement("div");
        if(partido.prediccion){ //esto es si esta la prediccion

        cartaPartido.innerHTML += `\
        <div class="mdc-card mdc-card--outlined">\
        <div class="mdc-card-wrapper__text-section">\
          <div class="demo-card__title">${partido.equipo1} - ${partido.equipo2}</div>\
          <div class="demo-card__subhead">${partido.fecha}</div>\
          <div class="demo-card__title">Tu predicción: ${partido.prediccion1} - ${partido.prediccion2}</div>\
        </div>\
      </div>`;

        }else{ // si no han hecho la prediccion

        cartaPartido.innerHTML += `\
        <div class="mdc-card mdc-card--outlined">\
        <div class="mdc-card-wrapper__text-section">\
          <div class="demo-card__title">${partido.equipo1} - ${partido.equipo2}</div>\
          <div class="demo-card__subhead">${partido.fecha}</div>\
        </div>\
        <div class="mdc-card__actions">\
          <button class="mdc-button mdc-button--raised mdc-button--leading">\
            <span class="mdc-button__ripple"></span>\
            <i class="material-icons mdc-button__icon" aria-hidden="true"\
              >edit</i\
            >\
            <span class="mdc-button__label">Ingresar predicción</span>\
          </button>\
        </div>\
      </div>`;

        }

        container.appendChild(cartaPartido)
    });
}






const updateListTransactions = (list) => {
    var container = document.querySelector(`#Historial #${list[0].type.toLowerCase()} .content .history-container`);
    container.innerHTML = ''; //limpia
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

updatePartidos(instancia.getPartidosList());
instancia.setPrediccion("001", 2, 13);
updatePartidos(instancia.getPartidosList());
