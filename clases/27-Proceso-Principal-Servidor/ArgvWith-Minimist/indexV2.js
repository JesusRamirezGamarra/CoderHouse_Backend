import minimist from "minimist";

///////////////////////////////////////////////////////////////////////////////
const  {
    mode,
    v,
    p,
    m // indica si se envia email
} = minimist(process.argv.slice(2),{
            default:{mode:"PRODUCCION"},
            alias:{v:'version'}
        });

console.log(mode)     
console.log(v)     
if(m){
    //envia email
    console.log("email enviado")
}
else{
    console.log("se debio enviar correo")
}

///////////////////////////////////////////////////////////////////////////////

// node indexV2.js
    // se debio enviar correo
// node indexV2.js -v
    // PRODUCCION
    // true
    // se debio enviar correo    




///////////////////////////////////////////////////////////////////////////////
const  args = minimist(process.argv.slice(2),{
            default:{mode:"PRODUCCION"},
            alias:{
                v:'version',
                x:'Premium'
            }
        });

console.log(args)
console.log(mode)     
console.log(v)     
if(m){
    //envia email
    console.log("email enviado")
}
else{
    console.log("se debio enviar correo")
}

///////////////////////////////////////////////////////////////////////////////

// node indexV2.js -v
    // { _: [], v: true, version: true, mode: 'PRODUCCION' }
    // PRODUCCION
    // true
    // se debio enviar correo

// node indexV2.js -x -v     
// {
//     _: [],
//     x: true,
//     Premium: true,
//     v: true,
//     version: true,
//     mode: 'PRODUCCION'
//   }
//   PRODUCCION
//   true
//   se debio enviar correo








