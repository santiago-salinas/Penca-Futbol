const Sistema = require('./sistema');
const Perfil = require('./perfil');

const instancia = new Sistema();
const perfil = new Perfil();
instancia.addPerfil(perfil);


test('Mi primera prueba', () => {
  expect(true).toBe(true);
});


test('Crear Sistema, puntaje 0', () => {
  expect(instancia.getPuntaje()).toBe(0);
});


test('Crear Sistema, puntaje 100', () => {
  instancia.setPuntaje(100);
  expect(instancia.getPuntaje()).toBe(100);
});