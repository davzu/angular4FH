interface Xmen { nombre: string, poder: string }

function enviarMision(xmen: Xmen) {
    console.log("Enviando a: " + xmen.nombre);
    console.log("Poder: " + xmen.poder);
}

function enviarCuartel(xmen: Xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
    console.log("Poder: " + xmen.poder);
}

let wolver: Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
};

enviarMision(wolver);
enviarCuartel(wolver);

