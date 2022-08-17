const sumar = (num1, num2) =>  num1 + num2;     // Return implicito
const restar = (num1, num2) =>  num1 - num2;     // Return implicito

const operacion = (num1, num2, operador) => { // callback
    return operador(num1, num2);
}

console.log(    operacion(2,3,sumar)    );
console.log(    operacion(2,3,restar)   );


// leerArchivo = (ruta, error, resultado) =>{
    
//     return error ;

//     return resultado;
// }