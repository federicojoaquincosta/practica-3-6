const Deportista = require("./Deportista.js");


class Futbolista extends Deportista{
    posicion = "posicion de juego x defecto"
    constructor(nombre, edad, altura, peso, posicion){
        super(nombre, edad, altura, peso);
        this.posicion = posicion;
    }

    patearLaPelota(){
        console.log("pateando la pelota");
    }

    pasandoLaPelota(){
        console.log("pasando la pelota");
    }

    enQuePosicionJugas(){
        console.log("Juego de " + this.posicion);
    }
}

module.exports = Futbolista;