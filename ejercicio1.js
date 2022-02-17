/*
Escribe el código en javascript para:

Declara la variable suma
Declara  una variable llamada x y pídela al usuario.
Declara  una variable llamada y  pídela al usuario.
Asigna el resultado de x más y.
Imprime en consola “La suma es: ” seguida del valor de la variable suma.
*/

let x = prompt("ingresa un numero a sumar");
let y = prompt("ingresa el segundo numero a sumar");

let suma = parseFloat(x) + parseFloat(y);

console.log("La suma es: " + suma);