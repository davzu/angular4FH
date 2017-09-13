"use strict";
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.puedePelear = false;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman = new Avenger("Antman", "capi", "Scott Lang");
console.log(antman);
