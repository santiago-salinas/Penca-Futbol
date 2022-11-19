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
      equipo1: this.equipo1,
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
}

export default Partido;

// TODO: Agregar en la documentacion porque elegimos
// hacer las predicciones de esa manera  (source:adorjan)
