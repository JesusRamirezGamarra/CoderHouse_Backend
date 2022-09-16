const  operationDoAsyncWithPromise = (numero01,numero02) =>{
    const resultado = numero01 / numero02
    return new Promise ( resolve => { 
        setTimeout(() =>{
            resolve(resultado)
        },2500)
    })
}



console.log(    
    // (
        [1,2,3,4].map( (item) =>{
        return item * 3
        })
    //); // --> xq si retiro el ; no se ejecuta la instruccion del la linea 18
); // --> xq si retiro el ; no funciona el codigo


(async() => {
    const result = await operationDoAsyncWithPromise(1,3)
    console.log({result: result})
})();
