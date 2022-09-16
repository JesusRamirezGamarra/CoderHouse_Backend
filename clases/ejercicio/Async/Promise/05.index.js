
let  promesa01 = new Promise( (resolve,reject) =>{
    if(true){
        resolve('1era Promesa Resuelta')
    }
    else{
        reject('Error al ejecutar 1era Promesa Resuelta')
    }
})

let  promesa02 = new Promise( (resolve,reject) =>{
    resolve('2do Promesa Resuelta')
})

let  promesa03 = new Promise( (resolve,reject) =>{
        resolve('3er Promesa Resuelta')
})

let  promesa04 = new Promise( (resolve,reject) =>{
        resolve('4ta Promesa Resuelta')
})

// let  promesaError = new Promise( (resolve,reject) =>{
//     if(false){
//         resolve('Ultima Promesa Resuelta')
//     }
//     else{
//         reject('Error al ejecutar las promesa')
//     }
// })

// if(false)
// {
//     // Requiere la implementacion del reject para poder utilizar el catch de esta forma abreviada
//     promesaError
//         .then(response => console.log(response), error=> console.log('error'))

//     promesa01
//         .then(response => console.log(response), error=> console.log('error'))


//     promesa01
//         .then ((response) => {
//             console.log('promesaOnlyResolve Response: ',response)
//         })
//         .catch((error) =>{
//             console.log('promesaOnlyResolve Error: ',error)
//         })
// }
if(false)
{
promesa01
    .then(
        response => {
            console.log(response);
            return promesa02;
        }
        , 
        error => {
            console.log('error en la 1era Promesa');
            throw error;
        }
    )    
    .then(
        valorSegundaPromesa => {
            console.log(valorSegundaPromesa);
        },
        error=> {
            console.log('reject:',error);
            console.log('error en la 2da Promesa');
        }        
    )
}
if(true)
{
    promesa01
        .then(
            response => {
                console.log(response);
                return promesa02;
            }
        )    
        .then(
            valorSegundaPromesa => {
                console.log(valorSegundaPromesa);
                return promesa03;
            }     
        )
        .then(
            valorTerceraPromesa => {
                console.log(valorTerceraPromesa);
            }     
        )        
        .catch(
            error =>{
                console.log('error:',error)
            }
        )
}