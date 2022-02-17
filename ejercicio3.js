/*
Haz un javascript para: Calcular el área de un triángulo. ¿Qué variables necesitas? Los valores deben de ser capturados con promt y mostrados con alertas.
*/
let base = prompt("ingresa la base del triangulo");
let altura = prompt("ingresa la altura del triangulo");

let resultado = ((parseFloat(base) * parseFloat(altura))/2 );

alert (`la base de tu triangulo es ${resultado}`);