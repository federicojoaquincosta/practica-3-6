class Deportista {
    //Estados/caracteristicas
    nombre = "nombre del deportista";
    edad = "edad del deportista";
    altura = "altura del deportista en metros";
    peso = "peso del deportista en kilos";
    retirado = false;

    /**
     * Inicializa un objeto Deportista
     * @param {String} nombre del Deportista
     * @param {Number} edad del Deportista 
     * @param {Number} altura del Deportista
     * @param {Number} peso del Deportista
     */
    constructor(nombre, edad, altura, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }

    comoTeLlamas(){
        console.log(this.nombre);
    }

    estasRetirado(){
        console.log(this.retirado);
    }

    //Comportamientos
    dormir(){
        console.log("durmiendo");
    }

    concentrar(){
        console.log("concentrandose para competir");
    }

    comer(){
        console.log("comiendo");
    }

    entrenar(){
        console.log("entrenando")
    }
}

module.exports = Deportista;