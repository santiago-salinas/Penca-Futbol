/**
 * TODO: Documentacion
 */
class Partido {
  /**
   * Inicializa y crea una instancia de la clase Partido
   * @param {array} dataArray array con atributos
   */
  constructor(dataArray) {
    this.identificador = dataArray["identificador"];
    this.equipo1 = dataArray["equipo1"];
    this.equipo2 = dataArray["equipo2"];
    // booleano que indica si hay prediccion ingresada
    this.prediccion = dataArray["prediccion"];
    // para poner cuanto el primer equipo
    this.prediccion1 = dataArray["prediccion1"];
    // para poner cuanto el segundo equipo
    this.prediccion2 = dataArray["prediccion2"];
    this.resultado1 = dataArray["resultado1"];
    this.resultado2 = dataArray["resultado2"];
    this.fecha = new Date(dataArray["fecha"]);
    // booleano para saber si ya reclamaron el premio o no
    this.reclame = dataArray["reclame"];
    this.type = "Partido";
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
      fecha: this.fecha,
      reclame: this.reclame,
      type: this.type,
    };
  }
}

export default Partido;

// TODO: Agregar en la documentacion porque elegimos
// hacer las predicciones de esa manera  (source:adorjan)
