const operation = (numero01,numero02,callback) =>{
    return callback(numero01,numero02)
}

const operationSetTimeOut = (numero01,numero02,callback) =>{
    return setTimeout(() =>{
        callback(numero01,numero02)
    },500)
}

const operationDoAsync = (numero01,numero02,callback) =>{
    const resultado = numero01 / numero02
    return setTimeout(() =>{
        callback(resultado)
    },500)
}

const  operationDoAsyncWithPromise = (numero01,numero02) =>{
    const resultado = numero01 / numero02
    return new Promise ( resolve => { 
        setTimeout(() =>{
            resolve(resultado)
        },2500)
    })
}



console.log(    operation(1,3,(a,b) =>a + b)    )
console.log(    operation(1,3,(a,b) =>a * b)    )
console.log(    operation(1,3,(a,b) =>a - b)    )   

console.log(    operationSetTimeOut(1,3,(a,b) =>a + b)    )

operationSetTimeOut(1,3,(a,b) =>{
    console.log(    a + b   )
})    
operationSetTimeOut(1,3,(a,b) =>{
    console.log(    a * b   )
})    
operationSetTimeOut(1,3,(a,b) =>{
    console.log(    a - b   )
})    

operationDoAsync(1,3,(result) =>{
    console.log( result  )
}) 




operationDoAsyncWithPromise(1,3)
    .then(result=> console.log(result))

console.log(    
    [1,2,3,4].map( (item) =>{
    return item * 3
    })
);

// // Call start
(async() => {
    const result = await operationDoAsyncWithPromise(1,3)
    console.log({result: result})
})();




async function myfunction() {
    console.log('Inside of myfunction');
}

// Here we wait for the myfunction to finish
// and then returns a promise that'll be waited for aswell
// It's useless to wait the myfunction to finish before to return
// we can simply returns a promise that will be resolved later

// useless async here
async function start() {
    // useless await here
    return await myfunction();
}

// Call start
(async() => {
    console.log('before start');
    await start();
    console.log('after start');    
    // const result = await operationDoAsyncWithPromise(1,3)
    // console.log({result: result})
})();

