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

  getPerfil(){
    return this.perfil;
  }

  addPerfil(perfil){
    this.perfil = perfil;
  }

  getPuntaje(){
    return this.getPerfil().puntos;
  }

  setPuntaje(p){
    this.getPerfil().puntos += p;
  }

  calcularPuntaje(){
    
  }
}
module.exports = Sistema;
