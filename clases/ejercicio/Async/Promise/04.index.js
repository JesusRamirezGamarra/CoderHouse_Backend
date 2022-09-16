
let  promesa01 = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        resolve('1era Promesa Resuelta')
    },100)
})

let  promesa02 = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        resolve('2do Promesa Resuelta')
    },500)
})

let  promesa03 = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        resolve('3er Promesa Resuelta')
    },1000)
})

let  promesa04 = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        resolve('4ta Promesa Resuelta')
    },1500)
})

let  promesaError = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        reject('Error al ejecutar las promesa')
    },2000)
})

// Retorna ;la 1era Promesa en terminar.
Promise.race([promesa04,promesa03,promesa02,promesa01])
    .then((values)=>{
        console.log(' Retorna la 1era Promesa en terminar.')
        console.log('Los valores son',values)
    })
    .catch((e)=>{
        console.log('Ocurrio un error',e)
    })



Promise.race([promesa04,promesa03,promesaError,promesa02,promesa01])
    .then((values)=>{
        console.log('Retorna la 1era Promesa en terminar. Aunque existe una promesa con reject : error')        
        console.log('Los valores son',values)
    })
    .catch((e)=>{
        console.log('Ocurrio un error',e)
    })


