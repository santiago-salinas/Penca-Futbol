class Partido {
    constructor(dataArray) {
        this.identificador = dataArray['identificador'];
        this.equipo1 = dataArray['equipo1'];
        this.equipo2 = dataArray['equipo2'];
        this.prediccion = dataArray['prediccion']; //booleano que indica si hay prediccion ingresada
        this.prediccion1 = dataArray['prediccion1']; //para poner cuanto el primer equipo
        this.prediccion2 = dataArray['prediccion2']; //para poner cuanto el segundo equipo
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

//TODO: Agregar en la documentacion porque elegimos hacer las predicciones de esa manera  (source:adorjan)