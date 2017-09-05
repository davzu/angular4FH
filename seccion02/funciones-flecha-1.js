"use strict";
let miFuncion = function (a) {
    return a;
};
// let miFuncionF = a => a;
let miFuncionF = (a) => a;
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
let miFuncion2 = function (a, b) {
    return a + b;
};
let miFuncion2F = (a, b) => a + b;
console.log(miFuncion2(1, 2));
console.log(miFuncion2F(3, 4));
let miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
let miFuncion3F = (nombre) => {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("david"));
console.log(miFuncion3F("david"));
