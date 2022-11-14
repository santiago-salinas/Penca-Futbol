/* eslint-disable require-jsdoc */
class Partido {
  constructor(dataArray) {
    this.identificador = dataArray["identificador"];
    this.equipo1 = dataArray["equipo1"];
    this.equipo2 = dataArray["equipo2"];
    this.prediccion = dataArray["prediccion"]; //booleano que indica si hay prediccion ingresada
    this.prediccion1 = dataArray["prediccion1"]; //para poner cuanto el primer equipo
    this.prediccion2 = dataArray["prediccion2"]; //para poner cuanto el segundo equipo
    this.fecha = new Date(dataArray["fecha"]); //TODO:Cambie como ponemos la fecha
    this.reclame = dataArray["reclame"]; //booleano para saber si ya reclamaron el premio o no
    this.type = "Partido";
  }

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

module.exports = Partido;

//TODO: Agregar en la documentacion porque elegimos hacer las predicciones de esa manera  (source:adorjan)
