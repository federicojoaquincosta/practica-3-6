const Deportista = require("./Deportista.js");


class Basquetbolista extends Deportista{
    sabeHacerVolcadas = false;
    constructor(nombre, edad, altura, peso, sabeHacerVolcadas){
        super(nombre, edad, altura, peso);
        this.sabeHacerVolcadas = sabeHacerVolcadas;
    }

    intentarHacerDoble(){
        console.log("tirando la pelota al aro desde adentro del area");
    }

    intentarHacerTriple(){
        console.log("tirando la pelota al aro desde afuera del area");
    }


    sabesHacerVolcadas(){
        console.log(this.sabeHacerVolcadas);
    }

}

module.exports = Basquetbolista;