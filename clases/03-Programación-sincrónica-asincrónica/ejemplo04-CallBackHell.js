const copiarArchivo = ( ruta,callBack ) =>{
    buscarArchivo(ruta,(error,archivo)=>{
        if(error){
            callBack(error)
        }else{
            leerArchivo(ruta,'utf-8',(error,text)=>{
                if(error){
                    callBack(error)
                }else{
                    EscribirArchivo(nuevaRuta,tedxt,(error,resultado=>{
                        if(error){
                            callBack(error)
                        }else{
                            callBack(null,resultado);
                        }
                    }))
                }
            })   
        }
    })
}

const buscarArchivo = (ruta,callBack) =>{
    //bucar archivo en la ruta


    // Operaciones

    // El archivo no existio

    callBack('El archivo no Existe')

    // El archivo si existio
    // Me posciono sobre el archivo
    callBack(null,archivo)


}