class Sistema {
	constructor() {
        this.partidos = [];
	}

    getPartidosList(){
        return this.partidos;
    }

    addPartido(partido){
        this.partidos.push(partido);
    }

    //Agrega prediccion
    updatePartido(partido){
        //TODO: Buscar partido y modificar
        //this.partidos.push(partido);
    }
}
module.exports = Sistema;