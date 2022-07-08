const fs = require('fs');
const { arch } = require('os');
const path = '/home/jesus/Proyecto/Backend/desafio/02-archivos/require/AYUDA/V2/src/files/productos.json'

class Contenedor{
    getAll = async() =>{
        try {
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path,'utf-8');
                let lista = JSON.parse(fileData);
                //console.log(lista);
                return lista;
            }else{
                return [];
            }
        } catch (error) {
            console.log("Hay un error " + error)
        }
    }

    save = async(producto) =>{
        try {
            let lista = await this.getAll();
            if(lista.length===0){
                producto.id= 1;
                lista.push(producto);
                await fs.promises.writeFile(path,JSON.stringify(lista,null,'\t'));
            }else{
                producto.id = lista[lista.length-1].id+1
                lista.push(producto)
                await fs.promises.writeFile(path,JSON.stringify(lista,null,'\t'))
            }
        } catch (error) {
            console.log("Hay un error: "+ error )
        }
    }

    getById = async(idNumber) =>{
        try {
            const data = await this.getAll();
            console.log(data);
            if(data.length+1>idNumber){
                console.log(data.find((element) => element.id == idNumber))
            }else{
                console.log("null")
            }

        } catch (error) {
            console.log("Hay un error: " + error)
        }
    }
    deleteById = async(idDelete) =>{
        try {
            console.log(idDelete)
            const arr = await this.getAll()
            console.log(arr)
            const borrar = arr.filter( oProduto => oProduto.id != idDelete);
            console.log(borrar)
            await fs.promises.writeFile(path, JSON.stringify(borrar,null,'\t'))
        } catch (error) {
            console.log("Hay un error:" + error)
        }
    }

}

module.exports =Contenedor;