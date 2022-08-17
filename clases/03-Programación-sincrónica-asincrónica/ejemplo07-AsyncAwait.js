const dividir = (dividendo,divisor) =>{
    return new Promise( (resolve, reject) => {
        if( divisor ===0 ){
            reject( 'No se puede dividir por 0')
        }else{
            resolve(  dividendo/divisor   )
        }

    })
}

const proceso =  async() =>{
    // Todo lo que este en este espacio , se tratara asyncronamente
    console.log(    dividir(2,4)    )

}

const procesoAwait =  async() =>{
    // Todo lo que este en este espacio , se tratara asyncronamente
    let resultado, resultado2;
    try{
        resultado = await  dividir(2,4);
        resultado2 = resultado + 1
    }
    catch(e){
        console.log(  'Error : ',  e    )
    }
    finally{
        console.log(    resultado   )
        console.log(    resultado2   )
    }
}

proceso();
procesoAwait();