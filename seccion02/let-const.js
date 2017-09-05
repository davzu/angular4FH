"use strict";
let mensaje = "hola";
const OPCIONES = "opcion 01";
/*
No está permitido, se debe inicializar la constante
const OPCIONES;
OPCIONES = "opción 01";
*/
if (true) {
    // Estas variables están definidas en el ámbito del if
    let mensaje = "adiós";
    const OPCIONES = "opcion 02";
}
console.log(mensaje);
console.log(OPCIONES);
