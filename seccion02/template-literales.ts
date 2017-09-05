function getNombre(){
    return "Jorge";
}

let nombre:string = "Fernando";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";

// ` => backtick
let texto:string = `Hola, 
        ${nombre} ${apellido}
        (${edad})`;

console.log(`Tipo de dato ${typeof(texto)}`);
console.log(texto);

let texto2:string = `${getNombre()}`;
console.log(`Tipo de dato ${typeof(texto2)}`);
console.log(texto2);


