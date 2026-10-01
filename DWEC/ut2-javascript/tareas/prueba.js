"use strict";
const prompt = require("prompt-sync")();

// Inicializa un array con 10 numeros aleatorios entre 1 y 100
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

// Muestra los 10 numeros utilizando un bucle
console.log("Números aleatorios:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Recorre el array una vez y muestra la media de los numeros utilizando un bucle. Mostrar el menor mayor y la media de todos  los números.
let suma = 0;
let menor = numeros[0];
let mayor = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
let media = suma / numeros.length;
console.log("Media de los números:", media);
console.log("Menor número:", menor);
console.log("Mayor número:", mayor);