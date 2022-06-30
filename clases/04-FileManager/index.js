setTimeout(()=> {
    console.log('Test TimeOUT ....')
},1000)

// setInterval(()=>{
//     console.log('Test TimeOUT ....')
// }, 2000)

let contador = 0;
let timer = setInterval(()=>{
    console.log('Test TimeOUT ....' , 5 - contador);
    contador++;
    if(contador === 5){
        clearInterval(timer)

    }
}, 2000)