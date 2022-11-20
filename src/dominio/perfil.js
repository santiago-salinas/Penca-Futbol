/**
 * TODO: Documentacion
 */
class Perfil {
  /**
   * Inicializa y crea una instancia de la clase Perfil
   * */
  constructor() {
    this.puntos = 0;
    this.type = 'Perfil';
  }
  /**
   *
   * @return {array} Devuelve el perfil
   */
  getPerfil() {
    return {
      puntos: this.puntos,
      type: this.type,
    };
  }
}
module.exports = Perfil;
