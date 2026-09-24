"use strict"

// Inicio

const prompt = require("prompt-sync")();
console.log("Lista de la Compra");

// Creo un array para que añada las compras

let lista = [];
let objeto;

 // Compruebo si hay un elemento en la lista. Además no va a parar hasta que el cliente no ponga nada

do {
    objeto = prompt("Introduce un objeto (cadena vacía para terminar): ");

    if (objeto !== "") {
        if (lista.includes(objeto)) {
            console.log(objeto + " ya está en la lista");
        } else {
            lista.push(objeto);
            console.log("Se ha añadido correctamente");
        }
    }

} while (objeto !== "");

    // Compruebo si hay un elemento en la lista

        
    // Ordeno las lista y la muestro por pantalla

    let listaordenada = lista.sort();


    listaordenada.forEach(objeto =>{
        console.log(objeto);

    })
