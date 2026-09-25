"use strict"

// Inicio

const prompt = require("prompt-sync")();
console.log("Calculadora");


// Creo el acumulador
let acumulador = 0;
console.log(acumulador);

console.log("Elige una opcion: ");

// Creo un switch para que el usuario pueda elegir un operador 

function calcular(operacion, numero) {
    switch (operacion) {
        case '+':
            acumulador += numero;
        break;
        case '-':
            acumulador -= numero;
        break;
        case '*':
            acumulador *= numero;
        break;
        case '/':
            acumulador /= numero;
        break;
        default:
            console.log("Operación no valida");
    }

    console.log("Resultado " + acumulador);
}



