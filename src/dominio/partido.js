/**
 * TODO: Documentacion
 */
class Partido {
  /**
   * Inicializa y crea una instancia de la clase Partido
   * @param {array} dataArray array con atributos
   */
  constructor(dataArray) {
    this.identificador = dataArray['identificador'];
    this.equipo1 = dataArray['equipo1'];
    this.equipo2 = dataArray['equipo2'];
    // booleano que indica si hay prediccion ingresada
    this.prediccion = false;
    // para poner cuanto el primer equipo
    this.prediccion1 = 0;
    // para poner cuanto el segundo equipo
    this.prediccion2 = 0;
    this.resultado1 = 0;
    this.resultado2 = 0;
    this.fecha = new Date(dataArray['fecha']);
    // booleano para saber si ya reclamaron el premio o no
    this.reclame = false;
    this.type = 'Partido';
  }
  dataArray;
  /**
   *
   * @return {array} Devuelve el objeto Partido
   */
  getPartido() {
    return {
      identificador: this.identificador,
      equipo1: this.equipo1,
      equipo2: this.equipo2,
      prediccion: this.prediccion,
      prediccion1: this.prediccion1,
      prediccion2: this.prediccion2,
      resultado1: this.resultado1,
      resultado2: this.resultado2,
      fecha: this.fecha,
      reclame: this.reclame,
      type: this.type,
    };
  }

  /**
   *
   * @return {bool} devuelve si se realizo prediccion
   */
  getPrediccion() {
    return this.prediccion;
  }

  /**
   *
   * @return {int} devuelve prediccion 1
   */
  getPrediccion1() {
    return this.prediccion1;
  }

  /**
   *
   * @return {int} devuelve prediccion 2
   */
  getPrediccion2() {
    return this.prediccion2;
  }

  /**
   *
   * @return {int} devuelve resultado1;
   */
  getResultado1() {
    return this.resultado1;
  }

  /**
   *
   * @return {int} devuelve resultado2;
   */
  getResultado2() {
    return this.resultado2;
  }

  /**
   *
   * @return {int} devuelve resultado2;
   */
  getReclame() {
    return this.reclame;
  }
}

module.exports = Partido;

// TODO: Agregar en la documentacion porque elegimos
// hacer las predicciones de esa manera  (source:adorjan)
