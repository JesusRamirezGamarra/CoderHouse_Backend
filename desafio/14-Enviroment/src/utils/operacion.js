//funcion numeros aleatorios

const calcularNumeros = (cant) => {

    const between = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const limiteInferior = 1;
    const limiteSuperior = 1000;
    const salida = {};
    
    for (let i = 0; i < cant; i++) {
        const valor = between(limiteInferior,limiteSuperior);
    
        if(salida[valor])
            salida[valor] = salida[valor]+1;
        else
            salida[valor] = 1;
    }
    return salida
}

process.on('message', (msg) => {
    let sum

    if (msg) {
        const cant = msg
        sum = calcularNumeros(cant);
    }
    process.send(sum);

});