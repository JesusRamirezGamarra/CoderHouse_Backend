//FASE 01 : Write Failing test


// FASE 02 : MAKE The test PASS
// const sumar = (num1,num2) =>{
//     if(!num1|| !num2) return null;
//     // if(isNaN(num1) || isNaN(num2)) return null;
//     // console.log(typeof num1)
//     // console.log(typeof num2)
//     if(typeof num1 != "number" || typeof num2 != "number") return null;
//     let result = num1 + num2;
//     return result;
// }


//FASE 03 : Refactoring
const sumar = (num1,num2) =>{
    if(!num1|| !num2) return null;
    if(typeof num1 != "number" || typeof num2 != "number") return null;
    return  num1 + num2;
}



console.log(    sumar ("1",2)   )
console.log(    sumar (1,2)     )


// import { Calculadora } from "./calculadora.js";


// const r1 = Calculadora.suma(2,4);
// console.log(r1);


// const r2 = Calculadora.resta(7,3);
// console.log(r2);
// const r3 = Calculadora.suma('pepe', 4);




// let string = "papaconqueso";
// let result = string.indexOf('.')
// console.log(result)