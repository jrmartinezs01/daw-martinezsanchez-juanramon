"use strict"

// Inicio
const prompt = require("prompt-sync")();
console.log("Adivina estos números del 0 a 20");

// Genero 10 números aleatorios y los guardo en el array

let numerosGenerado = [];

    for (let i = 0; i < 10; i++) {
        numerosGenerado.push(Math.floor(Math.random() * 21));
    }

// Pido al usuario 5 números y se guarda en un array

let numerosUsuario = [];

    for (let i = 0; i < 5; i++){
        let num = Number(prompt("Introduce el número " + (i + 1) + " (0 a 20):"));
        numerosUsuario.push(num);
    }

// Muestro el resultado al usuario

let aciertos = 0;
let numAciertos = [];

    for(let i = 0; i < numerosUsuario.length; i++){
        for(let j = 0; j < numerosGenerado.length; j++){
            if(numerosUsuario[i] === numerosGenerado[j]){
                aciertos++;
                numAciertos.push(numerosUsuario[i]);
                break;
            }
        }
    }

// Sale por consola los resultados

console.log("Números generados: " + numerosGenerado.join(", "));
console.log("Número de aciertos: " + aciertos);
console.log("Números acertados: " + numAciertos.join(", "));










