"use strict";

const Cuenta = require("./cuenta.js");

console.log("Calculadora");

// Prueba
const CUENTA1 = new Cuenta("Pepito", 150.50);
console.log(CUENTA1.toString());

// Prueba de ingresos
CUENTA1.ingresar(50);
console.log(CUENTA1.cantidad);

// Prueba retirar
CUENTA1.retirar(100);
console.log(CUENTA1.toString());