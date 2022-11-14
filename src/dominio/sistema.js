class Sistema {
  constructor() {
    this.partidos = [];
  }

  getPartidosList() {
    return this.partidos;
  }

  addPartido(partido) {
    this.partidos.push(partido);
  }

  //Agrega prediccion
  setPrediccion(idPartido, prediccion1, prediccion2) {
    //TODO: Buscar partido y modificar
    //this.partidos.push(partido)
    this.getPartidosList().forEach((partido) => {
      if (partido.identificador == idPartido) {
        partido.prediccion = true;
        partido.prediccion1 = prediccion1;
        partido.prediccion2 = prediccion2;
      }
    });
  }
}
module.exports = Sistema;
