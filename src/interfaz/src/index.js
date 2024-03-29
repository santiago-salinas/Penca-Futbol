import './styles/index.scss';
import Sistema from '../../dominio/sistema';
import Partido from '../../dominio/partido';

// Top app bar
import {MDCTopAppBar} from '@material/top-app-bar';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
new MDCTopAppBar(topAppBarElement);
//

// Text Fields
import {MDCTextField} from '@material/textfield';
const txtField1 = new MDCTextField(document.querySelector('#labelPredic1'));
const txtField2 = new MDCTextField(document.querySelector('#labelPredic2'));

// End Text Fields

// Card
import {MDCRipple} from '@material/ripple';
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
[].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
// Card End

// Tab
import {MDCTabBar} from '@material/tab-bar';
import Perfil from '../../dominio/perfil';
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.activateTab(0);
// Tab end

// -------- Inicio datos de prueba --------
// Datos de prueba
const instancia = new Sistema();
const perfil = new Perfil();
instancia.addPerfil(perfil);


const partido001 = new Partido({
  identificador: '001',
  equipo1: '🇺🇾 Uruguay',
  equipo2: 'Holanda 🇳🇱',
  fecha: '2022-12-07',
});
// No paso, tiene prediccion
instancia.addPartido(partido001);
instancia.setPrediccion('001', 1, 3);

const partido002 = new Partido({
  identificador: '002',
  equipo1: '🇪🇸 España',
  equipo2: 'Ghana 🇬🇭',
  fecha: '2022-12-07',
});
// No paso, no tiene prediccion
instancia.addPartido(partido002);

const partido003 = new Partido({
  identificador: '003',
  equipo1: '🇺🇾 Uruguay',
  equipo2: 'México 🇲🇽',
  fecha: '2021-10-07',
});
// Ya paso no tiene prediccion
instancia.addPartido(partido003);
instancia.setResultado('003', 4, 1);

const partido004 = new Partido({
  identificador: '004',
  equipo1: '🇳🇱 Netherland',
  equipo2: 'México 🇲🇽',
  fecha: '2021-10-07',
});
// Ya paso,tiene prediccion, y reclame
instancia.addPartido(partido004);
instancia.setPrediccion('004', 2, 1);
instancia.setResultado('004', 4, 1);
instancia.setReclame('004');

const partido005 = new Partido({
  identificador: '005',
  equipo1: '🇵🇾 Paraguay',
  equipo2: 'México 🇲🇽',
  fecha: '2021-10-07',
});
// Ya paso, tiene prediccion y no reclame
instancia.addPartido(partido005);
instancia.setResultado('005', 4, 1);
instancia.setPrediccion('005', 4, 1);

const partido006 = new Partido({
  identificador: '006',
  equipo1: '🇩🇪 Alemania',
  equipo2: 'Qatar 🇶🇦',
  fecha: '2022-11-16',
});
instancia.addPartido(partido006);
instancia.setResultado('006', 4, 1);

// -------- Fin datos de prueba --------

const contenido = document.querySelectorAll('#Pantalla');
tabBar.listen('MDCTabBar:activated', function(event) {
  // Obtiene el elemento seleccionado del tab
  // console.log(event.detail.index);
  // console.log(contenido);
  document.querySelector('#Pantalla .show').classList.add('hide');
  document.querySelector('#Pantalla .show').classList.remove('show');
  contenido[0].children[event.detail.index].classList.add('show');
  contenido[0].children[event.detail.index].classList.remove('hide');
  // console.log(contenido[0].children[event.detail.index]);
  updatePartidos(instancia.getPartidosList());
});

// PRE: Dado el identificador de un partido
// POS: Se encarga que luego el boton para ingresar
// la prediccion, sepa a que prediccion corresponde

const reclamarPuntos = (partidoAReclamar) => {
  instancia.setReclame(partidoAReclamar.identificador);
  updatePartidos(instancia.getPartidosList());
}; // Hay que hiddear el boton y mostrar que reclamo los puntos

const pantallaPrediccion = (partido) => {
  // console.log(partido);
  document.querySelector('#Pantalla .show').classList.add('hide');
  document.querySelector('#Pantalla .show').classList.remove('show');

  document.querySelector('#Menu').classList.add('hide');
  document.querySelector('#Menu').classList.remove('show');

  document.querySelector('#back-button').classList.add('show');
  document.querySelector('#back-button').classList.remove('hide');
  // Volver al inicio
  document.querySelector('#back-button').addEventListener('click', function() {
    document.querySelector('#Menu').classList.add('show');
    document.querySelector('#Menu').classList.remove('hide');
    document.querySelector('#Pantalla .show').classList.add('hide');
    document.querySelector('#Pantalla .show').classList.remove('show');

    contenido[0].children[0].classList.add('show');
    contenido[0].children[0].classList.remove('hide');
    tabBar.activateTab(0);
    document.querySelector('#back-button').classList.add('hide');
    document.querySelector('#back-button').classList.remove('show');
    updatePartidos(instancia.getPartidosList());
  });

  const predic = document.querySelector('#Pantalla #IngresoPrediccion');
  predic.classList.add('show');
  predic.classList.remove('hide');
  document.querySelector(
      '#IngresoPrediccion #paises',
  ).innerHTML = `${partido.equipo1} - ${partido.equipo2} `;

  document.querySelector(
      '#txtPredic1',
  ).innerHTML = `Predicción ${partido.equipo1}`;

  txtField1.value = '';
  txtField2.value = '';

  document.querySelector(
      '#txtPredic2',
  ).innerHTML = `Predicción ${partido.equipo2}`;

  const oldElement = document.querySelector('#btnPredic');
  const newElement = oldElement.cloneNode(true);
  oldElement.parentNode.replaceChild(newElement, oldElement);

  document.querySelector('#btnPredic').addEventListener('click', function() {
    if (txtField1.valid && txtField2.valid) {
      instancia.setPrediccion(
          `${partido.identificador}`,
          txtField1.value,
          txtField2.value,
      );
      document.querySelector('#Menu').classList.add('show');
      document.querySelector('#Menu').classList.remove('hide');
      document.querySelector('#Pantalla .show').classList.add('hide');
      document.querySelector('#Pantalla .show').classList.remove('show');

      contenido[0].children[0].classList.add('show');
      contenido[0].children[0].classList.remove('hide');
      tabBar.activateTab(0);
      document.querySelector('#back-button').classList.add('hide');
      document.querySelector('#back-button').classList.remove('show');
      updatePartidos(instancia.getPartidosList());
    } else {
      alert('Parametros vacios');
    }
    // console.log(partido.identificador);
  });
  twemoji.parse(document.body);
};

const updatePartidos = (listaPartidos) => {
  const tabActiva = document.querySelector('#Pantalla .show').id;
  // console.log("holisAAA");
  // console.log(tabActiva);

  const container = document.querySelector('.container' + tabActiva);
  // console.log("esto es el container mira xd");
  // console.log(container);

  container.innerHTML = ''; // esto limpia
  listaPartidos.forEach((partido) => {
    // Hago una fecha nueva que setea sus datos con los datos de hoy
    const fechaDeHoy = new Date();

    // console.log("Esta es la fecha del partido");
    // console.log(partido.fecha);
    // console.log("Esta es la fecha de hoy xd");
    //  console.log(fechaDeHoy);
    //  console.log("Este es el resultado de la comparacion");
    //  console.log(partido.fecha < fechaDeHoy);

    if (tabActiva == 'Resultados') {
      if (partido.fecha < fechaDeHoy) {
        // if true es que ya paso el partido

        if (partido.prediccion) {
          // esto es si esta la prediccion

          if (partido.reclame) {
            // esto es si reclamaron ya o no
            // si ya reclamaron

            const cartaPartido = document.createElement('div');
            cartaPartido.innerHTML += `\
        <div class="mdc-card mdc-card">\
        <div class="mdc-card-wrapper__text-section">\
          <div class="demo-card__title">${partido.equipo1} - ${
  partido.equipo2
}</div>\
          <div class="demo-card__subhead">${partido.fecha.getDate()}/${
  partido.fecha.getMonth() + 1
}/${partido.fecha.getFullYear()}</div>\
          <div class="demo-card__title">Ya reclamaste tu premio</div>\
          <div  class="demo-card__subhead">
          Tu predicción : ${partido.prediccion1} - ${partido.prediccion2}
          </div>\
          <div  class="demo-card__subhead">
          Resultado : ${partido.resultado1} - ${partido.resultado2}
          </div>\
        </div>\
      </div>`;
            container.appendChild(cartaPartido);
          } else {
            // Calcula el puntaje

            const puntaje = instancia.calcularPuntaje(partido.identificador);

            const cartaPartido = document.createElement('div');
            cartaPartido.innerHTML += `\
<div class="mdc-card mdc-card">\
<div class="mdc-card-wrapper__text-section">\
  <div class="demo-card__title">${partido.equipo1} - ${partido.equipo2}</div>\
  <div class="demo-card__subhead">${partido.fecha.getDate()}/${
  partido.fecha.getMonth() + 1
}/${partido.fecha.getFullYear()}</div>\
</div>\
<div class="mdc-card__actions">\
  <button id="btn${
  partido.identificador
}" class="mdc-button mdc-button--raised mdc-button--leading">\
    <span class="mdc-button__ripple"></span>\
    <i class="material-icons mdc-button__icon" aria-hidden="true"\
      >edit</i\
    >\
    <span class="mdc-button__label">Reclamar ${puntaje} puntos</span>\
  </button>\
  <div  class="demo-card__subhead">
          Tu predicción : ${partido.prediccion1} - ${partido.prediccion2}
          </div>\
          <div  class="demo-card__subhead">
          Resultado : ${partido.resultado1} - ${partido.resultado2}
          </div>\
</div>\
</div>`;
            container.appendChild(cartaPartido);
            // Agrega funcionalidad a los botones
            document
                .querySelector(`#btn${partido.identificador}`)
                .addEventListener('click', function() {
                  reclamarPuntos(partido);
                // console.log(partido.identificador);
                });

            // si auno no lo reclamaron
          }
        } else {
          // ACA ES QUE PASO EL PARTIDO Y NO HICISTE LA PREDICCION

          const cartaPartido = document.createElement('div');
          cartaPartido.innerHTML += `\
       <div class="mdc-card mdc-card">\
       <div class="mdc-card-wrapper__text-section">\
         <div class="demo-card__title">${partido.equipo1} - ${
  partido.equipo2
}</div>\
         <div class="demo-card__subhead">${partido.fecha.getDate()}/${
  partido.fecha.getMonth() + 1
}/${partido.fecha.getFullYear()}</div>\
<div class="demo-card__title">Ya paso el partido y no hiciste prediccion</div>\
       </div>\
       <div  class="demo-card__subhead">
          Resultado : ${partido.resultado1} - ${partido.resultado2}
          </div>\
     </div>`;
          container.appendChild(cartaPartido);
        }
      }
    }

    if (tabActiva == 'Proximos') {
      if (partido.fecha >= fechaDeHoy) {
        // no ha pasado el partido o es hoy ( ==)

        const cartaPartido = document.createElement('div');
        if (partido.prediccion) {
          // esto es si esta la prediccion

          cartaPartido.innerHTML += `\
  <div class="mdc-card mdc-card">\
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
          container.appendChild(cartaPartido);
        } else {
          // si no han hecho la prediccion
          cartaPartido.innerHTML += `\
    <div class="mdc-card mdc-card">\
    <div class="mdc-card-wrapper__text-section">\
      <div class="demo-card__title">${partido.equipo1} - ${
  partido.equipo2
}</div>\
      <div class="demo-card__subhead">${partido.fecha.getDate()}/${
  partido.fecha.getMonth() + 1
}/${partido.fecha.getFullYear()}</div>\
    </div>\
    <div class="mdc-card__actions">\
      <button id="btn${
  partido.identificador
}" class="mdc-button mdc-button--raised mdc-button--leading">\
        <span class="mdc-button__ripple"></span>\
        <i class="material-icons mdc-button__icon" aria-hidden="true"\
          >edit</i\
        >\
        <span class="mdc-button__label">Ingresar predicción</span>\
      </button>\
    </div>\
  </div>`;
          container.appendChild(cartaPartido);
          // Agrega funcionalidad a los botones
          document
              .querySelector(`#btn${partido.identificador}`)
              .addEventListener('click', function() {
                pantallaPrediccion(partido);
              // console.log(partido.identificador);
              });
        }
      }
    }
  });

  if (tabActiva == 'Perfil') {
    const cartaPerfil = document.createElement('div');

    cartaPerfil.innerHTML += `\
      <div id="contPuntaje" class="mdc-card mdc-card">\
      <div class="mdc-card-wrapper__text-section">\
        <div id="textPuntaje" class="demo-card__subhead">
          Actualmente tienes:
        </div>\

        <div id="zonaPuntaje" class="mdc-card mdc-card">\
            <div id="zonaPuntaje" class="demo-card__title"> 
              ${perfil.puntos}
            </div>\
        </div>\

        <div id="textPuntaje" class="demo-card__subhead">Puntos</div>\
      </div>`;

    container.appendChild(cartaPerfil);
  }

  twemoji.parse(document.body);
};

updatePartidos(instancia.getPartidosList());
// instancia.setPrediccion("001", 2, 13);
updatePartidos(instancia.getPartidosList());
