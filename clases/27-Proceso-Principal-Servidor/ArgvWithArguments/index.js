
console.log(process.argv.slice(2)) // Se utiliza para limpiar los 2 argumentos x default existentes en process.argv
// node index.js
    // []


// nodeindex.js 1 2 3 a 4
    // [ '1', '2', '3', 'a', '4' ]
// node index.js 8080 DEV
//     [ '8080', 'DEV' ]    



console.log(
    process.argv.slice(2).reduce((processArgs, val) => {
    let [key, value] = val.split('=');
    processArgs[key] = value;
    return processArgs;
    }, {})
)