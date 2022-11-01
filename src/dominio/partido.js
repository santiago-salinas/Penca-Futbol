class Partido {
	constructor(dataArray) {
        this.identificador = dataArray['identificador'];
		this.equipo1 = dataArray['equipo1'];
		this.equipo2 = dataArray['equipo2'];
        //Boleano
		this.prediccion = dataArray['prediccion'];
        this.prediccion1 = dataArray['prediccion1'];
        this.prediccion2 = dataArray['prediccion2'];
        this.fecha = dataArray['fecha'];
        this.type = 'Partido';
	}

	getPartido() {
		return {
        equipo1: this.equipo1,
        equipo1: this.equipo1,
        prediccion: this.prediccion,
        fecha: this.fecha,
        type: this.type
		};
	}
}

module.exports = Partido;