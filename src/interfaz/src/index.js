import "./styles/index.scss";
//Card JavaScript instantiation
import { MDCRipple } from "@material/ripple";
import Sistema from "../../dominio/sistema";
import Partido from "../../dominio/partido";

const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
});
//Card End

//Tab
import { MDCTabBar } from "@material/tab-bar";
const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.activateTab(0);

//Tab end

//Datos de prueba
//Datos de prueba
let instancia = new Sistema();
let partido001 = new Partido({
  identificador: "001",
  equipo1: "Uruguay",
  equipo2: "Ghana",
  prediccion: true,
  prediccion1: 1,
  prediccion2: 2,
  fecha: "2022-10-07",
  type: "Partido",
});
let partido002 = new Partido({
  identificador: "002",
  equipo1: "Uruguay",
  equipo2: "México",
  prediccion: false,
  prediccion1: 3,
  prediccion2: 4,
  fecha: "2021-10-07", //TODO: Cambie como ponemos las fechas en cada partido
  type: "Partido",
});

instancia.addPartido(partido001);
instancia.addPartido(partido002);

let contenido = document.querySelectorAll("#Pantalla");
tabBar.listen("MDCTabBar:activated", function (event) {
  //Obtiene el elemento seleccionado del tab
  console.log(event.detail.index);
  console.log(contenido);
  document.querySelector("#Pantalla .show").classList.add("hide");
  document.querySelector("#Pantalla .show").classList.remove("show");
  contenido[0].children[event.detail.index].classList.add("show");
  contenido[0].children[event.detail.index].classList.remove("hide");
  console.log(contenido[0].children[event.detail.index]);
});

const updatePartidos = (listaPartidos) => {
  var container = document.querySelector(".container");
  container.innerHTML = ""; //esto limpia
  listaPartidos.forEach((partido) => {
    //Hago una fecha nueva que setea sus datos con los datos de hoy
    var fechaDeHoy = new Date();

    if (partido.date < fechaDeHoy) {
      //if true es que ya paso el partido
      let cartaPartido = document.createElement("div");
      if (partido.prediccion) {
        //esto es si esta la prediccion

        cartaPartido.innerHTML += `\
      <div class="mdc-card mdc-card--outlined">\
      <div class="mdc-card-wrapper__text-section">\
        <div class="demo-card__title">${partido.equipo1} - ${
          partido.equipo2
        }</div>\
        <div class="demo-card__subhead">${partido.fecha.getDate()}/${
          partido.fecha.getMonth() + 1
        }/${partido.fecha.getFullYear()}</div>\
        <div class="demo-card__title">Tu predicción: ${partido.prediccion1} - ${
          partido.prediccion2
        }</div>\
      </div>\
    </div>`;
      } else {
        // si no han hecho la prediccion
        cartaPartido.innerHTML += `\
      <div class="mdc-card mdc-card--outlined">\s
      <div class="mdc-card-wrapper__text-section">\
        <div class="demo-card__title">${partido.equipo1} - ${
          partido.equipo2
        }</div>\
        <div class="demo-card__subhead">${partido.fecha.getDate()}/${
          partido.fecha.getMonth() + 1
        }/${partido.fecha.getFullYear()}</div>\
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

      container.appendChild(cartaPartido);
    } else {
      //no ha pasado el partido o es hoy ( ==)

      let cartaPartido = document.createElement("div");
      if (partido.prediccion) {
        //esto es si esta la prediccion

        cartaPartido.innerHTML += `\
      <div class="mdc-card mdc-card--outlined">\
      <div class="mdc-card-wrapper__text-section">\
        <div class="demo-card__title">${partido.equipo1} - ${
          partido.equipo2
        }</div>\
        <div class="demo-card__subhead">${partido.fecha.getDate()}/${
          partido.fecha.getMonth() + 1
        }/${partido.fecha.getFullYear()}</div>\
        <div class="demo-card__title">Tu predicción: ${partido.prediccion1} - ${
          partido.prediccion2
        }</div>\
      </div>\
    </div>`;
      } else {
        // si no han hecho la prediccion
        cartaPartido.innerHTML += `\
      <div class="mdc-card mdc-card--outlined">\s
      <div class="mdc-card-wrapper__text-section">\
        <div class="demo-card__title">${partido.equipo1} - ${
          partido.equipo2
        }</div>\
        <div class="demo-card__subhead">${partido.fecha.getDate()}/${
          partido.fecha.getMonth() + 1
        }/${partido.fecha.getFullYear()}</div>\
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

      container.appendChild(cartaPartido);
    }
  });
};

updatePartidos(instancia.getPartidosList());
instancia.setPrediccion("001", 2, 13);
updatePartidos(instancia.getPartidosList());
