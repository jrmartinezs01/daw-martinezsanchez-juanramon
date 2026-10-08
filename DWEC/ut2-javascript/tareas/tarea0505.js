"use strict";

const prompt = require('prompt-sync')();

class Cuenta {
  #titular;
  #cantidad;

  constructor(titular, cantidad = 0) {
    if (!titular) {
      throw new Error('El titular es obligatorio');
    }
    this.#titular = titular;

    if (cantidad > 0) {
      this.#cantidad = Number(cantidad);
    } else {
      this.#cantidad = 0;
    }
  }

  get titular() {
    return this.#titular;
  }

  get cantidad() {
    return this.#cantidad;
  }

  set titular(nuevoTitular) {
    if (nuevoTitular) {
      this.#titular = nuevoTitular;
    }
  }

  set cantidad(nuevaCantidad) {
    if (nuevaCantidad > 0) {
      this.#cantidad = Number(nuevaCantidad);
    } else {
      this.#cantidad = 0;
    }
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.#cantidad = this.#cantidad + Number(cantidad);
    }
  }

  retirar(cantidad) {
    if (cantidad > 0) {
      if (this.#cantidad - cantidad < 0) {
        this.#cantidad = 0;
      } else {
        this.#cantidad = this.#cantidad - Number(cantidad);
      }
    }
  }
}


