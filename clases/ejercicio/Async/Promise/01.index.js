

let  promesaTrue = new Promise( (resolve,reject) =>{
    if(true){
        resolve('Operacion fue un exito')
    } else {
        reject('Ocurrio un error')
    }
});

promesaTrue
    .then ((response) => {
        console.log('Response: ',response)
    })
    .catch((error) =>{
        console.log('Error: ',error)
    })


let  promesaFalse = new Promise( (resolve,reject) =>{
    if(false){
        resolve('Operacion fue un exito')
    } else {
        reject('Ocurrio un error')
    }
});
    

promesaFalse
    .then ((response) => {
        console.log('Response: ',response)
    })
    .catch((error) =>{
        console.log('Error: ',error)
    })


    
    