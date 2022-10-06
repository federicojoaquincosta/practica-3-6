const Deportista = require("./Deportista.js");
const Futbolista = require("./Futbolista.js");
const Basquetbolista = require("./Basquetbolista.js");

const unDeportista = new Deportista("Fangio", 40, 1.75, 60);
const unFutbolista = new Futbolista("Messi", 35, 1.69, 67, "delantero");
const unBasquetbolista = new Basquetbolista("Jordan", 59, 1.98, 98, true);

console.log(unBasquetbolista instanceof Deportista);
console.log(unFutbolista instanceof Deportista);


unDeportista.comer();

unFutbolista.comer();

unFutbolista.enQuePosicionJugas();

unBasquetbolista.sabesHacerVolcadas();