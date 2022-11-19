/**
 * TODO: Documentacion
 */
class Sistema {
  /**
   * TODO: Documentacion
   */
  constructor() {
    this.partidos = [];
    this.perfil;
  }
  /**
   * TODO: Documentacion
   * @return {partidos} The sum of the two numbers.
   */
  getPartidosList() {
    return this.partidos;
  }

  /**
   * TODO: Documentacion
   * @param {array} partido The first number.
   */
  addPartido(partido) {
    this.partidos.push(partido);
  }

  /**
   * TODO: Documentacion
   * @param {int} idPartido The first number.
   * @param {int} prediccion1 The first number.
   * @param {int} prediccion2 The first number.
   * @return {boolean}
   */
  setPrediccion(idPartido, prediccion1, prediccion2) {
    if (prediccion1 >= 0 && prediccion2 >= 0) {
      this.getPartidosList().forEach((partido) => {
        if (partido.identificador == idPartido) {
          partido.prediccion = true;
          partido.prediccion1 = prediccion1;
          partido.prediccion2 = prediccion2;
          return true;
        }
      });
    }
    return false;
  }

  /**
   * TODO: Documentacion
   * @param {int} idPartido The first number.
   * @param {int} resultado1 The first number.
   * @param {int} resultado2 The first number.
   * @return {boolean}
   */
  setResultado(idPartido, resultado1, resultado2) {
    if (resultado1 > 0 && resultado2 > 0) {
      this.getPartidosList().forEach((partido) => {
        if (partido.identificador == idPartido) {
          partido.resultado1 = resultado1;
          partido.resultado2 = resultado2;
          return true;
        }
      });
    }
    return false;
  }

  /**
   * TODO: Documentacion
   * @param {int} idPartido The first number.
   * @param {int} resultado1 The first number.
   * @param {int} resultado2 The first number.
   * @return {boolean}
   */
  setReclame(idPartido) {
    this.getPartidosList().forEach((partido) => {
      if (partido.identificador == idPartido) {
        partido.reclame = true;
        this.setPuntaje(this.calcularPuntaje(partido.identificador));
        return true;
      }
    });
    return false;
  }

  /**
   * TODO: Documentacion
   * @return {perfil}
   */
  getPerfil() {
    return this.perfil;
  }

  /**
   * TODO: Documentacion
   * @param {perfil} perfil The first number.
   */
  addPerfil(perfil) {
    this.perfil = perfil;
  }

  /**
   * TODO: Documentacion
   * @return {int}
   */
  getPuntaje() {
    return this.getPerfil().puntos;
  }

  /**
   * TODO: Documentacion
   * @param {int} p The first number.
   * @return {boolean}
   */
  setPuntaje(p) {
    if (p > 0) {
      this.getPerfil().puntos += p;
      return true;
    }
    return false;
  }

  /**
   * TODO: Documentacion
   * @param {int} idPartido The first number.
   * @return {int}
   */
  calcularPuntaje(idPartido) {
    let puntaje = 1000;
    let delta1;
    let delta2;
    this.getPartidosList().forEach((partido) => {
      if (partido.identificador == idPartido) {
        delta1 = Math.abs(partido.prediccion1 - partido.resultado1);
        delta2 = Math.abs(partido.prediccion2 - partido.resultado2);
      }
    });
    puntaje = puntaje - 300 * delta1 - 300 * delta2;
    if (puntaje <= 0) {
      return 10;
    }
    return puntaje;
  }
}
export default Sistema;
