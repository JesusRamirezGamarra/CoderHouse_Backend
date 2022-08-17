const dividir = (dividendo,divisor) =>{
    return new Promise( (resolve, reject) => {
        if( divisor ===0 ){
            reject( 'No se puede dividir por 0')
        }else{
            resolve(  dividendo/divisor   )
        }

    })
}
// .then = cuando queremos obtener el resultado de la promesa que SI se cumplio
// .catch = Cuando queremos atrapar el error por el cual NO se resolvio la promesa

dividir(2,4).then(  result => console.log(result))
            .catch( error => console.log(error))

dividir(2,0).then(  result => console.log(result))
            .catch( error => console.log(error))


dividir(2,4).then(  result => {     return result+1;    })
            .then(  result => {     return result+2;    })
            .then(  result => {     return result-9;    })
            .then(  result => {     
                    if(result <5){
                        throw new Error('El numero es muy Bajo')
                    }
                    else{
                        console.log(result)
                    }
                })
            // .then(  result => console.log(result))
            .catch( error => console.log(error))


console.log ('Operacion de division Inicializada')
// Una promesa es asincrona
console.log(    // console.log es sincrono
    dividir(2,4).then(  result => console.log(result))
            .catch( error => console.log(error))
)
console.log ('Operacion de division Finalizada')


