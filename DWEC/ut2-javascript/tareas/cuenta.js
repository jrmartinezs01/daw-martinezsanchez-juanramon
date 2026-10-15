"use strict";

// Creo la clase Cuenta. En la que el titular no tiene que dar vacio y que la cantidad no pueda ser negativa
class Cuenta {
    constructor(titular, cantidad = 0) {
        if (!titular || titular.trim() === '') {
            throw new Error("El titular es obligatorio.");
        }

        this._titular = titular;

        if (cantidad < 0) {
            this._cantidad = 0;
        } else {
            this._cantidad = cantidad;
        }
    }

    // Getters y Setters. Por si se crea nuevas personas
    get titular() {
        return this._titular;
    }

    set titular(nuevoTitular) {
        if (!nuevoTitular || nuevoTitular.trim() === '') {
            console.log("Error: El titular no puede estar vacío.");
            return;
        }
        this._titular = nuevoTitular;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(nuevaCantidad) {
        if (nuevaCantidad < 0) {
            this._cantidad = 0;
        } else {
            this._cantidad = nuevaCantidad;
        }
    }

    // Funcion ingresar
    ingresar(importe) {
        if (importe > 0) {
            this._cantidad += importe;
        }
    }

    // Función retirar
    retirar(importe) {
        if (importe > 0) {
            this._cantidad -= importe;
            if (this._cantidad < 0) {
                this._cantidad = 0;
            }
        }
    }

    // ToString
    toString() {
        return "Cuenta - Titular: " + this.titular + ", Saldo: " + this.cantidad;
    }
}

module.exports = Cuenta;

