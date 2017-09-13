// destructuración de objetos

let avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga"
}

let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;

console.log(nombre, clave, poder);

let dragonBall = {
    mote: "Goku",
    raza: "Saiyayin",
    tecnica: "Kamekameha"
}

let {mote, raza, tecnica} = dragonBall;

console.log(mote, raza, tecnica);

// destructuración de arreglos

let superHeroes:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = superHeroes;
console.log(thor, capi, ironman);

let [, , iron] = superHeroes;
console.log(iron);

let [, capitan,] = superHeroes;
console.log(capitan);


