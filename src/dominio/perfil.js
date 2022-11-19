/**
 * TODO: Documentacion
 */
class Perfil {
  /**
   * TODO: Documentacion
   */
  constructor() {
    this.puntos = 0;
    this.type = 'Perfil';
  }
  /**
   * TODO: Documentacion
   * @return {array}
   */
  getPerfil() {
    return {
      puntos: this.puntos,
      type: this.type,
    };
  }
}
export default Perfil;
