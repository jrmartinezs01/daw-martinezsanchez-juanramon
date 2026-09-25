// Inicio
"use strict"

const prompt = require("prompt-sync")();
console.log("Equipo de Fútbol");

// Vamos a hacer un map, para que introduzca el dorsal y su nombre

let equipo = new Map();
let numero;

do {
    numero = prompt("Introduce la dorsal del jugador (cadena vacía para terminar): ");
    if(numero !== ""){
        let nombre = prompt("Introduce el nombre del jugador: ");
        equipo.set(numero, nombre);
    }
} while (numero !== "");

// Consulta de los jugadores
console.log("Consulta de los jugadores");
let consulta;
do {
    consulta = prompt("Introduzca la dorsal del jugador (0 para salir): ");

    if (consulta !== "0") {
        if(equipo.has(consulta)){
            console.log("El numero " + consulta + "lo tiene " + equipo.get(consulta))
        } else {
            console.log("No hay jugador con el número " + consulta);
        }
    }
} while (consulta !== "0");
