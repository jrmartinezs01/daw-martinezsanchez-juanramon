"use strict";

const prompt = require("prompt-sync")();
console.log("Calculadora");

// Creo el acumulador
let pantalla = 0;
let memoria = 0;

// El usuario puede establecer un valor de la pantalla directamente
function establecerPantalla(nuevoValor) {
    if (isNaN(nuevoValor)) {
        console.log("Error: El valor introducido no es válido");
        return pantalla;
    }
    pantalla = nuevoValor;
    console.log("Pantalla establecida a: " + pantalla);
    return pantalla;
}

// Creo las funciones de suma, resta, multiplicacion y division

function sumar(numero) {
    pantalla = pantalla + numero;
    return pantalla;
}

function restar(numero) {
    pantalla = pantalla - numero;
    return pantalla;
}

function multiplicar(numero) {
    pantalla = pantalla * numero;
    return pantalla;
}

function dividir(numero) {
    if (numero === 0) {
        console.log("No se puede dividir entre cero");
        return pantalla;
    }
    pantalla = pantalla / numero;
    return pantalla;
}

function modulo(numero) {
    pantalla = pantalla % numero;
    return pantalla;
}

function potencia(numero) {
    pantalla = Math.pow(pantalla, numero);
    return pantalla;
}

// Operaciones sobre la pantalla

function factorial() {
    if (pantalla < 0 || !Number.isInteger(pantalla)) {
        console.error("Error: Solo se puede con enteros no con negativos");
        return pantalla;
    }
    let resultado = 1;
    for (let i = 1; i <= pantalla; i++) {
        resultado *= i;
    }
    pantalla = resultado;
    return pantalla;
}

// Ahora voy a hacer las funciones que gestionen la memoria y pantalla

// Guardo el valor en la pantalla en la memoria

function guardarMemoria() {
    memoria = pantalla;
    console.log("Valor guardado en memoria: " + memoria);
}

// Recuperar memoria y lo cargo a la pantalla

function recuperarMemoria() {
    pantalla = memoria;
    console.log("Valor recuperado de memoria: " + pantalla);
}

// Resetear a 0 tanto pantalla como memoria

function resetearTodo() {
    pantalla = 0;
    memoria = 0;
    console.log("Pantalla y memoria reseteadas a 0");
}

// PRUEBA

function menuPrincipal() {
    let salir = false;

    while (!salir) {
        console.log("Pantalla: " + pantalla + " | Memoria: " + memoria);
        console.log(" 1. Escribir número en pantalla:");
        console.log(" 2. Sumar (+)");
        console.log(" 3. Restar (-)");
        console.log(" 4. Multiplicar (*)");
        console.log(" 5. Dividir (/)");
        console.log(" 6. Módulo (%)");
        console.log(" 7. Potencia (pantalla elevado a exponente)");
        console.log(" 8. Factorial (!) ");
        console.log(" M. Guardar en memoria");
        console.log(" R. Recuperar de memoria a pantalla (R)");
        console.log(" C. Reiniciar ");
        console.log(" S. Salir");

        let opcion = prompt("Elige una opción: ");

        if (opcion === null || opcion.trim().toUpperCase() === "S" || opcion.trim() === "0") {
            salir = true;
            console.log("Saliendo de la calculadora...");
            break;
        }

        switch (opcion.trim().toUpperCase()) {
            case "1": {
                let valor = parseFloat(prompt("Introduce el nuevo número para la pantalla: "));
                establecerPantalla(valor);
                break;
            }
            case "2": {
                let num = parseFloat(prompt(pantalla + "Introduce número: "));
                console.log("Resultado: " + sumar(num));
                break;
            }
            case "3": {
                let num = parseFloat(prompt(pantalla + "Introduce número: "));
                console.log("Resultado: " + restar(num));
                break;
            }
            case "4": {
                let num = parseFloat(prompt(pantalla + "Introduce número: "));
                console.log("Resultado: " + multiplicar(num));
                break;
            }
            case "5": {
                let num = parseFloat(prompt(pantalla + "Introduce divisor: "));
                console.log("Resultado: " + dividir(num));
                break;
            }
            case "6": {
                let num = parseFloat(prompt(pantalla + "Introduce divisor: "));
                console.log("Resultado: " + modulo(num));
                break;
            }
            case "7": {
                let num = parseFloat(prompt(pantalla + "Introduce exponente: "));
                console.log("Resultado: " + potencia(num));
                break;
            }
            case "8": {
                console.log("Resultado: " + factorial());
                break;
            }
            case "M": {
                guardarMemoria();
                break;
            }
            case "R": {
                recuperarMemoria();
                break;
            }
            case "C": {
                resetearTodo();
                break;
            }
            default: {
                console.log("Opcion no válida. Hazlo de nuevo.");
                break;
            }
        }
    }
}

menuPrincipal();