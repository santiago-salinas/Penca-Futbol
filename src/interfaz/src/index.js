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

//Datos de prueba
let instancia = new Sistema;
let partido001 = new Partido({ 'identificador': '001',  'equipo1': 'Uruguay', 'equipo2': 'Ghana',  'prediccion': false,  'prediccion1': 0,   'prediccion2': 0,'fecha': 'Martes 13','type': 'Partido'});
let partido002 = new Partido({ 'identificador': '002',  'equipo1': 'Uruguay', 'equipo2': 'México',  'prediccion': false,  'prediccion1': 0,   'prediccion2': 0,'fecha': 'Martes 23','type': 'Partido'});


instancia.addPartido(partido001);
instancia.addPartido(partido002);


