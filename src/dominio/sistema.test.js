const Sistema = require('./sistema');
const Perfil = require('./perfil');
const Partido = require('./partido');

const instancia = new Sistema();
const perfil = new Perfil();
instancia.addPerfil(perfil);

const partido001 = new Partido({
  identificador: '010',
  equipo1: '🇺🇾 Uruguay',
  equipo2: 'Holanda 🇳🇱',
  fecha: '2022-12-07',
});

instancia.addPartido(partido001);
console.log('agregue partido');


test('Mi primera prueba', () => {
  expect(true).toBe(true);
});

// Obtener Partido En Default
test('Obtener partido en default', () => {
  const aux = partido001.getPartido();
  expect(aux.identificador).toBe('010');
  expect(aux.equipo1).toBe('🇺🇾 Uruguay');
  expect(aux.equipo2).toBe('Holanda 🇳🇱');
  expect(aux.prediccion).toBe(false);
  expect(aux.prediccion1).toBe(0);
  expect(aux.prediccion2).toBe(0);
  expect(aux.resultado1).toBe(0);
  expect(aux.resultado2).toBe(0);
  expect(aux.reclame).toBe(false);
  expect(aux.type).toBe('Partido');
});

test('Crear Sistema, puntaje 0', () => {
  expect(instancia.getPuntaje()).toBe(0);
});

// Prueba para ver si acepta puntaje negativo
test('Establecer puntaje 100', () => {
  instancia.setPuntaje(100);
  expect(instancia.getPuntaje()).toBe(100);
});

// Prueba para ver si rechaza puntaje negativo
test('Establecer puntaje negativo', () => {
  const antes = instancia.getPuntaje();
  const bool = instancia.setPuntaje(-1);
  const despues = instancia.getPuntaje();
  expect(bool).toBe(false);
  expect(despues).toBe(antes);
});

// Pruebas para ver si se inicializo en false el reclame
test('Estado de partido aun no reclamado', () => {
  expect(partido001.getReclame()).toBe(false);
});

// Pruebas para ver si se cambio el reclame
test('Estado de partido reclamado', () => {
  instancia.setReclame(partido001.identificador);
  expect(partido001.getReclame()).toBe(true);
});

// Pruebas para ver si puede reclamar un partido fantasma para el sistema
test('Estado de partido fantasma', () => {
  const GHOST = new Partido({
    identificador: '045',
    equipo1: 'TEST1',
    equipo2: 'TEST2',
    fecha: '2022-12-07',
  });
  const bool = instancia.setReclame(GHOST.identificador);
  expect(GHOST.getReclame()).toBe(false);
  expect(bool).toBe(false);
});

// Pruebas para ver si rechaza prediccion 1 neagtiva;
test('Prediccion 1 negativa', () => {
  const antes = partido001.getPrediccion();
  const bool = instancia.setPrediccion(partido001.identificador, -1, 2);
  const despues = partido001.getPrediccion();
  expect(bool).toBe(false);
  expect(antes).toBe(false);
  expect(despues).toBe(false);
});

// Pruebas para ver si rechaza prediccion 2 neagtiva;
test('Prediccion 2 negativa', () => {
  const antes = partido001.getPrediccion();
  instancia.setPrediccion(partido001.identificador, 1, -2);
  const despues = partido001.getPrediccion();
  expect(antes).toBe(false);
  expect(despues).toBe(false);
});

// Pruebas para ver si rechaza ambas predicciones neagtiva;
test('Prediccion 2 negativa', () => {
  const antes = partido001.getPrediccion();
  instancia.setPrediccion(partido001.identificador, -1, -2);
  const despues = partido001.getPrediccion();
  expect(antes).toBe(false);
  expect(despues).toBe(false);
});

// Pruebas para ver si se setteo la prediccion 1
test('Estado de la prediccion 1', () => {
  instancia.setPrediccion(partido001.identificador, 1, 2);
  expect(partido001.getPrediccion1()).toBe(1);
});

// Pruebas para ver si se setteo la prediccion 2
test('Estado de la prediccion 2', () => {
  instancia.setPrediccion(partido001.identificador, 3, 4);
  expect(partido001.getPrediccion2()).toBe(4);
});

// Pruebas para ver si se setteo el resultado1
test('Estado del resultado 1', () => {
  instancia.setResultado(partido001.identificador, 10, 50);
  expect(partido001.getResultado1()).toBe(10);
});

// Pruebas para ver si se setteo el resultado2
test('Estado del resultado 2', () => {
  instancia.setResultado(partido001.identificador, 10, 6);
  expect(partido001.getResultado2()).toBe(6);
});

// Pruebas para ver si rechaza prediccion 1 neagtiva;
test('Resultado negativo', () => {
  const bool1 = instancia.setResultado(partido001.identificador, 3, 5);
  const antes1 = partido001.getResultado1();
  const antes2 = partido001.getResultado2();
  const bool2 = instancia.setResultado(partido001.identificador, -3, 5);
  const despues1 = partido001.getResultado1();
  const despues2 = partido001.getResultado2();

  expect(bool1).toBe(true);
  expect(antes1).toBe(3);
  expect(antes2).toBe(5);
  expect(bool2).toBe(false);
  expect(despues1).toBe(3);
  expect(despues2).toBe(5);
});

// Calcular puntaje de un partido con la prediccion exacta
test('Prediccion exacta', () => {
  const partidoEXACT = new Partido({
    identificador: '113',
    equipo1: 'TEST1',
    equipo2: 'TEST2',
    fecha: '2022-12-07',
  });

  instancia.addPartido(partidoEXACT);

  const bool1 = instancia.setPrediccion(partidoEXACT.identificador, 3, 5);
  const bool2 = instancia.setResultado(partidoEXACT.identificador, 3, 5);
  const puntaje = instancia.calcularPuntaje(partidoEXACT.identificador);
  expect(bool1).toBe(true);
  expect(bool2).toBe(true);
  expect(puntaje).toBe(1000);
});

// Calcular puntaje de un partido con la prediccion que difiere en 2 puntos
test('Prediccion delta2', () => {
  const EXACT2 = new Partido({
    identificador: '678',
    equipo1: 'TEST1',
    equipo2: 'TEST2',
    fecha: '2022-12-07',
  });

  instancia.addPartido(EXACT2);
  let pre1 = 3;
  let pre2 = 5;

  const bool1 = instancia.setPrediccion(EXACT2.identificador, pre1, pre2);
  pre1 = EXACT2.getPrediccion1(EXACT2.identificador);
  pre2 = EXACT2.getPrediccion2(EXACT2.identificador);
  const bool2 = instancia.setResultado(EXACT2.identificador, pre1+1, pre2-1);
  const puntaje = instancia.calcularPuntaje(EXACT2.identificador);
  expect(pre1).toBe(3);
  expect(pre2).toBe(5);
  expect(bool1).toBe(true);
  expect(bool2).toBe(true);
  // Por cada delta pierde 300 puntos
  expect(puntaje).toBe(1000 - 300*2);
});

// Calcular puntaje de un partido con la prediccion que difiere tanto
// que da negativo el premio y te da un consuelo de 10
test('Prediccion delta2', () => {
  const MAL = new Partido({
    identificador: '678',
    equipo1: 'TEST1',
    equipo2: 'TEST2',
    fecha: '2022-12-07',
  });

  instancia.addPartido(MAL);
  let pre1 = 3;
  let pre2 = 5;

  const bool1 = instancia.setPrediccion(MAL.identificador, pre1, pre2);
  pre1 = MAL.getPrediccion1(MAL.identificador);
  pre2 = MAL.getPrediccion2(MAL.identificador);
  const bool2 = instancia.setResultado(MAL.identificador, pre1+100, pre2-1);
  const puntaje = instancia.calcularPuntaje(MAL.identificador);
  expect(pre1).toBe(3);
  expect(pre2).toBe(5);
  expect(bool1).toBe(true);
  expect(bool2).toBe(true);
  // Por cada delta pierde 300 puntos
  expect(puntaje).toBe(10);
});

// Obtener Perfil as array
test('Obtener Perfil', () => {
  const user = instancia.getPerfil().getPerfil();
  const aux = instancia.getPuntaje();
  expect(user.puntos == aux).toBe(true);
});
