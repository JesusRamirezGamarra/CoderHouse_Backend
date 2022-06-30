const fs = require('fs')
fs.writeFile('pruebaCallBack.txt','Hola desde callBacks',(error)=>{
    if(error){
        console.log('hubo un error')
    }else {
        console.log('Todo Bien :) archivo Escrito')
    }
})


// En caso el WriteFile no finaliza antes que inicie el readFile se mostrara espacio vacio ya que no podra el contenido mientras el WriteFile esta escribiendo.
fs.readFile('pruebaCallBack.txt','utf8',(error,result)=>{
    if(error){
        console.log('Hay un error');
    }else{
        console.log(result);
    }

})

fs.appendFile('pruebaCallBack.txt','utf8',(error)=>{
    if(error){
        console.log('No se pudo hacer el Append');
    }else{
        console.log('Todo bien con el Append');
    }

})

// fs.unlink