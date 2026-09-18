# Estructuras

## Arrays
Permite almacenar una coleccion de datos a los que permite acceder de forma aleatoria

### Métodos

Estos ejemplos van a ser creado a base de frutas 

Poner siempre **use strict**;


| Método | Descripción                      |
|--------|----------------------------------|
| let frutas = ["Manzana", "Banana"];| Crear un Array |
| console.log(frutas.length);     | Conocer la longitud del Array |  
| let nuevaLongitud = frutas.push("Naranja");     |  Añadir elemento al final |
| let nuevaLongitud = frutas.unshift("Fresa"); | Añadir elemento al principio |
| let ultimo = frutas.pop(); | Eliminar el último |
| let primero = frutas.shift(); | Eliminar el primer elemento |
| let añadirDondesea = frutas.splice(1, 0, "Tomate"); | Añadir elemento donde tu quieras |
| let elementoEliminado = frutas.splice(pos, 1);      | Eliminar elementos segun su posición |
| console.log(frutas[0]); | Obtener el valor almacenado en una posición |
| console.log(frutas[frutas.length - 1]); | Obtener el valor almacenado en la última posición |
| frutas.sort();     | Ordenar un array  |
| let encontrado = frutas.find(f => f.length > 5); | Buscar un elemento que pasa la prueba |
| let existe = frutas.includes("Manzana"); | Comprobar si contiene un elemento |
| let largas = frutas.filter(f => f.length > 5); | Obtener un array con todos los elementos que cumplan una condición |
| let obtenerP = frutas.findIndex(f => f === "Banana"); | Obtener la posición del primer elemento que pasa la lista |
|let obtenerCon = frutas.indexOf("Banana"); | Obtener la posición de un valor concreto |
| let condicion1 = frutas.some(f => f.length > 5); | Comprobar si al menos uno cumple la condición |
| let condicionAll = frutas.every(f => f.length > 5); | Comprobar si todos tiene la condición |


----------------------------------------------------------
## Set

Puede almacenar valores únicos de cualquier tipo y itera a traves de los elementos de un conjunto en orden de inserción

### Métodos

Este ejemplos va a ser con Integer y String 

| Métodos | Descripción |
|---------|--------------------|
|         |                    |
|         |                    |
