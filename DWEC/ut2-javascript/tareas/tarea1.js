const numeroDeIntentos = 3;
let intentosRestantes = numeroDeIntentos;
const prompt = require("prompt-sync")();

const ingreso = "Ingresa un número";

console.log("Adivina el número entre 1 y 10. Tienes " + intentosRestantes + " intentos restantes.");

let codigoSecreto = Math.floor(Math.random() * 10) + 1;
let numeroIngresado;
let acertado = false;

while (intentosRestantes > 0 && !acertado) {
    numeroIngresado = Number(prompt(ingreso));

    if (numeroIngresado === codigoSecreto) {
        console.log("¡Felicidades! Has adivinado el número secreto.");
        acertado = true;
    } else {
        intentosRestantes--;
        
        if (numeroIngresado < codigoSecreto) {
            console.log("El número ingresado es menor que el número secreto.");
        } else {
            console.log("El número ingresado es mayor que el número secreto.");
        }

        if (intentosRestantes > 0) {
            console.log("Número incorrecto. Te quedan " + intentosRestantes + " intentos restantes.");
        } else {
            console.log("Lo siento, has agotado tus intentos. El número secreto era: " + codigoSecreto);
        }
    }
}










