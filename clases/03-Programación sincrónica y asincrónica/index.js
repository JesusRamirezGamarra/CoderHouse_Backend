function sumar(num1, num2) {
    return num1 + num2;
}

let res = sumar(2,3);


const restar = (num1, num2) =>  num1 - num2;     // Return implicito
const elevarAlCuadrardo = base => base **2;

class Cliente{
    consturctor(name){
        this.name = name;
    }
    quejarse = () =>{}
}


const operacion = (num1, num2, operador) => { // callback
    return operador(num1, num2)
}
