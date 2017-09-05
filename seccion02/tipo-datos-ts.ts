let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;
let hoy:Date = new Date();

hoy = new Date("2017-09-04");

// any acepta cualquier tipo de datos
let cualquiera:any;
cualquiera = "José";
console.log("Tipo de dato " + typeof(cualquiera));
console.log(cualquiera);
cualquiera = 1900;
console.log("Tipo de dato " + typeof(cualquiera));
console.log(cualquiera);
cualquiera = true;
console.log("Tipo de dato " + typeof(cualquiera));
console.log(cualquiera);

let spiderman = {
    nombre:"Peter",
    edad:20
}

console.log("Tipo de dato " + typeof(spiderman));
console.log(spiderman);

spiderman = {
    nombre:"Juan",
    edad:20
    //poder:"trepar paredes" // nos avisa que este atributo no está definido
}

console.log("Tipo de dato " + typeof(spiderman));
console.log(spiderman);









