let miFuncion = function (a: string) {
    return a;
}

// let miFuncionF = a => a;
let miFuncionF = (a: string) => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

let miFuncion2 = function (a: number, b: number) {
    return a + b;
}

let miFuncion2F = (a: number, b: number) => a + b;

console.log(miFuncion2(1, 2));
console.log(miFuncion2F(3, 4));

let miFuncion3 = function(nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}


console.log(miFuncion3("david"));
console.log(miFuncion3F("david"));

