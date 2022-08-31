let nombreDelplato = prompt ("Ingrese el nombre del plato")
let numeroDeIngredientes = prompt("ingrese el numero de ingredientes")

class Ingredientes{
    constructor(nombre,precio,cantidad){
        this.nombre =nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
    }
}

let ingredientesIngresados = [];
for(let index=0; index< numeroDeIngredientes; index++){
    ingredientesIngresados.push( new Ingredientes(
        prompt("ingrese el nombre del ingrediente"),
        prompt("ingrese el precio por Kilo"),
        prompt("ingrese la cantidad en gramos")
        )
    );
}

console.log(ingredientesIngresados)
	

// /*mi amigo tiene un negocio de pastas "salvattore pastas"
// el quiere saber cual es el costo de hacer cualquier plato de su carta y cuanto es la 
// ganancia de cada uno, teniendo en cuenta que cada receta tiene un maximo de 4 ingredientes.*/

// let nombredelplato = prompt("ingrese el nombre del plato");

// let ingrediente1 = prompt("nombre del ingrediente 1");
// let precioingrediente1 = parseFloat (prompt("precio de ingrediente 1"));
// let ingrediente2 = prompt("nombre del ingrediente 2");
// let precioingrediente2 = parseFloat(prompt("precio de ingrediente 2"));
// let ingrediente3 = prompt("nombre del ingrediente 3");
// let precioingrediente3 = parseFloat(prompt("precio de ingrediente 3"));
// let ingrediente4 = prompt("nombre del ingrediente 4");
// let precioingrediente4 = parseFloat(prompt("precio de ingrediente 4"));
// let preciodelplato = parseFloat(prompt("precio del plato"));

    // let costodelplato = parseFloat(precioingrediente1+precioingrediente2+precioingrediente3+precioingrediente4);
    // let gananciadelplato = parseFloat(preciodelplato - costodelplato);

// alert(" el costo de hacer "+ nombredelplato + " es " + costodelplato);
 // alert(" la ganancia de hacer "+ nombredelplato + " es " + gananciadelplato );



 // let nombre = "precios, costos y ganancias de " + nombredelplato;
 // console.log(nombre); 
 // console.log( ingrediente1 + " cuesta " + precioingrediente1 );
 // console.log( ingrediente2 + " cuesta " + precioingrediente2 );
 // console.log( ingrediente3 + " cuesta " + precioingrediente3 );
 // console.log( ingrediente4 + " cuesta " + precioingrediente4 );

 // console.log("el costo de hacer este plato es " + costodelplato );
 // console.log( "la ganancia de hacer este plato es " + gananciadelplato );





/*

 
 Elegir un tipo de pedido. Por ejemplo:
Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 
Ejemplo:  ¡Hola, Juan!
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

)*/ 