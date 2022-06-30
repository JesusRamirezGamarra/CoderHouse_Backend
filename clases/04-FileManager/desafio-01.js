// Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
// Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
// Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.


const mostrarLetras = (palabra,callback) =>{
    let contador = 0;
    const timer  = setInterval(()=>{
        if(contador<palabra.length){
            console.log(palabra[contador]);
            contador++;
        }else{//Evita el error IndexOutOfBounds
            clearInterval(timer);
            callback();
        }
    },1000)
}

const finalizado = () => console.log("Proceso terminado");

mostrarLetras('Hola',finalizado);