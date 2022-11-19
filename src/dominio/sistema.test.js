const Sistema = require("./sistema");
const Perfil = require("./perfil");
const Partido = require("./partido");

const instancia = new Sistema();
const perfil = new Perfil();
instancia.addPerfil(perfil);

const partido001 = new Partido({
  identificador: "010",
  equipo1: "🇺🇾 Uruguay",
  equipo2: "Holanda 🇳🇱",
  fecha: "2022-12-07",
});

instancia.addPartido(partido001);
console.log("agregue partido");

test("Mi primera prueba", () => {
  expect(true).toBe(true);
});

test("Crear Sistema, puntaje 0", () => {
  expect(instancia.getPuntaje()).toBe(0);
});

test("Establecer puntaje 100", () => {
  instancia.setPuntaje(100);
  expect(instancia.getPuntaje()).toBe(100);
});

//Pruebas para ver si se inicializo en false el reclame
test("Estado de partido aun no reclamado", () => {
  var partido = instancia.getPartido("010");
  expect(partido.getReclame()).toBe(false);
});

//Pruebas para ver si se cambio el reclame
test("Estado de partido aun  reclamado", () => {
  instancia.setReclame("010");
  var partido = instancia.getPartido("010");
  expect(partido.reclame).toBe(true);
});

//Pruebas para ver si se setteo la prediccion 1
test("Estado de la prediccion 1", () => {
  instancia.setPrediccion("010", 1, 2);
  var partido = instancia.getPartido("010");
  expect(partido.prediccion1).toBe(1);
});

//Pruebas para ver si se setteo la prediccion
test("Estado de la prediccion 2", () => {
  instancia.setPrediccion("010", 3, 4);
  var partido = instancia.getPartido("010");
  expect(partido.prediccion2).toBe(4);
});

//Pruebas para ver si se setteo el resultado1
test("Estado del resultado 1", () => {
  instancia.setResultado("010", 10, 50);
  var partido = instancia.getPartido("010");
  expect(partido.resultado1).toBe(10);
});

//Pruebas para ver si se setteo el resultado2
test("Estado del resultado 2", () => {
  instancia.setResultado("010", 10, 50);
  var partido = instancia.getPartido("010");
  expect(partido.resultado2).toBe(50);
});
