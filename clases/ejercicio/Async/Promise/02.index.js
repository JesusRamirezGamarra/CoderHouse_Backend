
let  promesa = new Promise( (resolve,reject) =>{
    console.log('Pendiente ...')
    
    setTimeout(() =>{
        resolve('Operacion fue un exito')
    }, 2000 )

    setTimeout(() =>{
        reject('Ocurrio un error')
    }, 3000 )
    
});

promesa
    .then ((response) => {
        console.log('Response: ',response)
    })
    .catch((error) =>{
        console.log('Error: ',error)
    })