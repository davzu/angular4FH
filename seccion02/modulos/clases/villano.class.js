"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Villano {
    constructor(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    imprimirPlan() {
        console.log(`El plan de ${this.nombre} es ${this.plan}`);
    }
}
exports.Villano = Villano;
