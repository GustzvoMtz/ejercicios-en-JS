/*
Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.

 Los valores deben de ser capturados con promt y mostrados con alertas.
*/


let precio = prompt("introduce el precio del articulo");
let descuento = prompt("ingresa el descuento que llevara ese articulo");

let resultado = ((parseFloat(precio) * (1-(parseFloat(descuento)/100))));

alert(`El precio del articulo es de ${precio} el descuento es de ${descuento} el precio ya con descuentop es de ${resultado}`)
