class Sistema {
  constructor() {
    this.partidos = [];
    this.perfil;
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

  getPerfil() {
    return this.perfil;
  }

  addPerfil(perfil) {
    this.perfil = perfil;
  }

  getPuntaje() {
    return this.getPerfil().puntos;
  }

  setPuntaje(p) {
    this.getPerfil().puntos += p;
  }

  calcularPuntaje(idPartido) {
    var puntaje = 1000;
    var delta1;
    var delta2;
    this.getPartidosList().forEach((partido) => {
      if (partido.identificador == idPartido) {
        delta1 = Math.abs(partido.prediccion1 - partido.resultado1);
        delta2 = Math.abs(partido.prediccion2 - partido.resultado2);
      }
    });
    puntaje = puntaje - 300 * delta1 - 300 * delta2;
    if (puntaje < 0) {
      return 10;
    }
    return puntaje;
  }
}
module.exports = Sistema;
