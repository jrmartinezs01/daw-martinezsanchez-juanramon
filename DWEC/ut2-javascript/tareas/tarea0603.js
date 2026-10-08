"use strict";

const prompt = require("prompt-sync")();
console.log("Calculadora");

// Creo la clase Cuenta. En la que el titular no tiene que dar vacio y que la cantidad no pueda ser negativa
class Cuenta {
    constructor (titular, cantidad) {
    if (!titular || titular.trim() === ''){
        throw new Error("El titular es obligatorio.");
    }

    this.titular = titular;

    if (cantidad < 0){
        this.cantidad = 0;
    } else {
        this.cantidad = cantidad;
    }

    }
}
    // Getters y Setters. Por si se crea nuevas personas
    get titular(){
        return this.titular;
    }

    set titular(nuevoTitular){
        if(!nuevoTitular || nuevoTitular.trim() === ''){
            console.log("Error: El titular no puede estar vacío.");
            return;
        }
        this.titular = nuevoTitular;
    }

    get cantidad(){
        return this.cantidad
    }

    set cantidad(nuevaCantidad){
        if(nuevaCantidad < 0){
            this.cantidad = 0;
        } else {
            this.cantidad = nuevaCantidad;
        }
    }

    // Funcion ingresar

    ingresar(importe) {
        if (importe > 0){
            this.cantidad += importe;
        }
    }

    // Función retirar

    retirar(importe) {
        if (importe > 0) {
            this.cantidad -= importe;
            if (this.cantidad < 0){
                this.cantidad = 0;
            }
        }
    }

    // ToString

    toString(){
        return "Cuenta - Titular: " + this.titular + ", Saldo: " + this.cantidad;
    }

    // Prueba

    const CUENTA1 = new Cuenta("Pepito", 150.50);
    console.log(CUENTA1.toString());

    // Prueba de ingresos

    CUENTA1.ingresar(50);
    console.log(CUENTA1.cantidad);

    // Prueba retirar

    CUENTA1.retirar(100);
    console.log(CUENTA1.toString());

