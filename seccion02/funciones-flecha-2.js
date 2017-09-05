"use strict";
/*
let hulk = {
    nombre: "Hulk",
    smash() {
        console.log(this.nombre + " smash!!!");
    }
}

hulk.smash();
// retorna => Hulk smash!!!
// this hace referencia al objeto hulk
*/
/*
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(function(){
            console.log(this.nombre + " smash!!!")
        },1500);
    }
}

hulk.smash();
// retorna => undefined smash!!!
// this hace referencia al objeto window
*/
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => console.log(this.nombre + " smash!!!"), 1500);
    }
};
hulk.smash();
// retorna => Hulk smash!!!
// this no es afectado dentro de una función que no pertenece al objeto actual, esto es una característica de la función flecha
// La función de flecha no modifica el puntero al objeto this 
