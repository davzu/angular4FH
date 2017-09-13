"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    console.log("Poder: " + xmen.poder);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
    console.log("Poder: " + xmen.poder);
}
let wolver = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolver);
enviarCuartel(wolver);
