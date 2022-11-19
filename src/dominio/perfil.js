class Perfil {
    constructor() {
      this.puntos = 0;
      this.type = "Perfil";
    }
    
    getPerfil() {
        return {
          puntos: this.puntos,
          type: this.type,
        };
    }
    
  }
  module.exports = Perfil;