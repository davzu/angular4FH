"use strict";
function getNombre() {
    return "Jorge";
}
let nombre = "Fernando";
let apellido = "Perez";
let edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
// ` => backtick
let texto = `Hola, 
        ${nombre} ${apellido}
        (${edad})`;
console.log(`Tipo de datos ${typeof (texto)}`);
console.log(texto);
let texto2 = `${getNombre()}`;
console.log(`Tipo de datos ${typeof (texto2)}`);
console.log(texto2);
