/**
 * TODO: Documentacion
 */
class Sistema {
  /**
   * Inicializa y crea una instancia de la clase Sistema
   */
  constructor() {
    this.partidos = [];
    this.perfil;
  }
  /**
   *
   * @return {partidos} Retorna partidos
   */
  getPartidosList() {
    return this.partidos;
  }

  /**
   * Agrega partido
   * @param {array} partido el partido a agregar
   */
  addPartido(partido) {
    this.partidos.push(partido);
  }

  /**
   * Establece predicciones a un cierto partido
   * @param {int} idPartido Identificador del partido
   * @param {int} prediccion1  Prediccion para el 1er equipo
   * @param {int} prediccion2 Prediccion para el 2do equipo
   * @return {boolean} Retorna si fue capaz de establecer la prediccion
   */
  setPrediccion(idPartido, prediccion1, prediccion2) {
    let bool = false;
    if (prediccion1 >= 0 && prediccion2 >= 0) {
      this.getPartidosList().forEach((partido) => {
        if (partido.identificador == idPartido) {
          partido.prediccion = true;
          partido.prediccion1 = prediccion1;
          partido.prediccion2 = prediccion2;
          bool = true;
        }
      });
    }
    return bool;
  }

  /**
   * Establece un resultado para un cierto partido
   * @param {int} idPartido Identificador del partido
   * @param {int} resultado1 El resultado del primer equipo
   * @param {int} resultado2 El resultado del segundo equipo
   * @return {boolean} Retorna si fue capaz de establecer el resultado
   */
  setResultado(idPartido, resultado1, resultado2) {
    let bool = false;
    if (resultado1 > 0 && resultado2 > 0) {
      this.getPartidosList().forEach((partido) => {
        if (partido.identificador == idPartido) {
          partido.resultado1 = resultado1;
          partido.resultado2 = resultado2;
          bool = true;
        }
      });
    }
    return bool;
  }

  /**
   * Establece que el puntaje ha sido reclamado para un cierto partido
   * @param {int} idPartido Identificador del partido
   * @return {boolean} Retorna si fue capaz de cambiar el
   * estado de el atributo reclame
   */
  setReclame(idPartido) {
    let bool = false;
    this.getPartidosList().forEach((partido) => {
      if (partido.identificador == idPartido) {
        partido.reclame = true;
        this.setPuntaje(this.calcularPuntaje(partido.identificador));
        bool = true;
      }
    });
    return bool;
  }

  /**
   *
   * @return {perfil} Devuelve el objeto perfil
   */
  getPerfil() {
    return this.perfil;
  }

  /**
   * Agrega un perfil
   * @param {perfil} perfil El perfil a agregar
   */
  addPerfil(perfil) {
    this.perfil = perfil;
  }

  /**
   *
   * @return {int} Retorna el puntaje de un perfil
   */
  getPuntaje() {
    return this.getPerfil().puntos;
  }

  /**
   * Suma un puntaje a el perfil
   * @param {int} p Puntaje a agregar
   * @return {boolean} Retorna si fue capaz de agregar ese puntaje o no.
   */
  setPuntaje(p) {
    if (p > 0) {
      this.getPerfil().puntos += p;
      return true;
    }
    return false;
  }

  /**
   * Calcula el puntaje de un cierto partido a partir de la
   * prediccion y el resultado real
   * @param {int} idPartido El partido cuyo puntaje sera calculado
   * @return {int} Devuelve el puntaje calculado
   */
  calcularPuntaje(idPartido) {
    let puntaje = 1000;
    let delta1 = 2000;
    let delta2 = 2000;
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
module.exports = Sistema;
