# Estructuras

## Arrays
Permite almacenar una coleccion de datos a los que permite acceder de forma aleatoria

### Métodos

Estos ejemplos van a ser creado a base de frutas 


| Método | Descripción                      |
|--------|----------------------------------|
| let frutas = ["Manzana", "Banana"];| Crear un Array |
| console.log(frutas.length);     | Conocer la longitud del Array |  
| let nuevaLongitud = frutas.push("Naranja");     |  Añadir elemento al final |
| let nuevaLongitud = frutas.unshift("Fresa"); | Añadir elemento al principio |
| let ultimo = frutas.pop(); | Eliminar el último |
| let primero = frutas.shift(); | Eliminar el primer elemento |
|        | Añadir o eliminar elementos      |
| let elementoEliminado = frutas.splice(pos, 1);      | Eliminar elementos segun su posición |
| console.log(arr[0]); | Obtener el valor almacenado en una posición |
| console.log(arr[arr.length - 1]); | Obtener el valor almacenado en la última posición |
|        | Ordenar un array                 |
|        | Buscar un elemento que pasa la prueba
|        | Comprobar si contiene un elemento |
|        | Obtener un array con todos los elementos que cumplan una condición |
