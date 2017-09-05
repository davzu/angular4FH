"use strict";
// el parámetro objeto tiene un valor por defecto
// el parámetro momento es opciona y se le indica con el signo de interrogación <nombre_variable>?:<tipo_dato>
function activar(quien, objeto = "batiseñal", momento) {
    let mensaje;
    console.log(`Momento: ${momento}`);
    if (momento) {
        mensaje = `${quien} activó la ${objeto} en la ${momento}`;
    }
    else {
        mensaje = `${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "sentido arácnido");
activar("Gordon", "semtodo arácnido", "tarde");
