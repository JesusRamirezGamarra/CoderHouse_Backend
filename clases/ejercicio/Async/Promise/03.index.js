
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


Promise.all([promesa01,promesa02,promesa03,promesa04])
    .then((values)=>{
        console.log('Se ejecutan todas las promesas en el orden en el que se agregaron en el arreglo')
        console.log('Los valores son',values)
    })
    .catch((e)=>{
        console.log('Ocurrio un error',e)
    })


Promise.all([promesa01,promesa02,promesaError,promesa03,promesa04])
    .then((values)=>{
        console.log('Los valores son',values)
    })
    .catch((e)=>{
        console.log('Se ejecutan todas las promesas , pero se retorna Reject : error')
        console.log('Ocurrio un error',e)
    })
