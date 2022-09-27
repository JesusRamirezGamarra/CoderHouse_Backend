import minimist from "minimist";

// const args = minimist(process.argv.slice(2));
// console.log(args)


//node indexMinimist.js 1 2 3 a
//{ _: [ 1, 2, 3, 'a' ] }


// node indexMinimist.js - 1 2 3 a
// { '1': 2, _: [ 3, 'a' ] }

// node indexMinimist.js --version
// { _: [], version: true }

// node indexMinimist.js --version 2
// { _: [], version: 2 }


// const  {
//     mode,
//     v,
//     p,
//     m // indica si se envia email
// } = minimist(process.argv.slice(2));

// console.log(m)

// if(m){
//     //envia email
// }else{
//     console.log("se debio enviar correo")
// }


// (base) MacBook-Pro-de-lucio:27 jesusramirez$ node indexMinimist.js  -v
// { _: [], v: true, VERSION: true, mode: 'PRODUCCION' }
// (base) MacBook-Pro-de-lucio:27 jesusramirez$ node indexMinimist.js  v a 12 3
// { _: [ 'v', 'a', 12, 3 ], mode: 'PRODUCCION' }
// (base) MacBook-Pro-de-lucio:27 jesusramirez$ 

// node indexMinimist.js  2 3 true true 0 1
// const {
//     mode,
//     v,
//     p,
//     m // indica si se envia email
// }  = minimist(process.argv.slice(2),{
//             default:{mode:"PRODUCCION"}
//         });

// // console.log(mode)
// console.log(args)

// if(m){
//     //envia email
// }else{
//     console.log("se debio enviar correo")
// }




// (base) MacBook-Pro-de-lucio:27 jesusramirez$ node indexMinimist.js  -v
// { _: [], v: true, VERSION: true, mode: 'PRODUCCION' }
// (base) MacBook-Pro-de-lucio:27 jesusramirez$ node indexMinimist.js  v a 12 3
// { _: [ 'v', 'a', 12, 3 ], mode: 'PRODUCCION' }
// (base) MacBook-Pro-de-lucio:27 jesusramirez$ 

// node indexMinimist.js  2 3 true true 0 1
// const args  = minimist(process.argv.slice(2),{
//     default:{mode:"PRODUCCION"},
//     alias:{v:"VERSION"}
// });

// // console.log(mode)
// console.log(args)



/// Desafio 

const {
    MODE,
    PORT,
    DEBUG

} = minimist (process.argv.slice(2),{
    alias:{
        m:"MODE",
        p:"PORT",
        d:"DEBUG"
    },
    default:{
        m:"prod",
        p: 0,
        d:false

    }

})


const config = {
    mode : MODE,
    port : PORT,
    debug : DEBUG,
    others : _

}

console.log(config)

// node indexMinimist.js 1 2 3 -m dev -p 8080 -d