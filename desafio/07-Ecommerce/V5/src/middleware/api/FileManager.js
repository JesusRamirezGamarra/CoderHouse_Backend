//const fs = require('fs');
import fs from 'fs';
import __dirname from '../../utils.js';
//const path = 'src/files/productos.json';

export class FileManager {
    constructor(nombreArchivo) { 
        this.path = __dirname + '/assets/database/' + nombreArchivo + '.json';
    }

    getById= async(idNumber) => {
        try {
            const data = await this.getAll();
            return data.find((element) => element.id == idNumber);
        } catch (error) {
            console.warn({class:`class FileManager`, method:`getById= async(idNumber)`,description:error})
            throw new Error(error);
        }
    }
    getAll= async()=> {
        try {
            return  await this.getData();
        } catch (error) {
            console.warn({class:`class FileManager`, method:`getAll= async()`,description:error})
            throw new Error(error);
        }
                
    }
    addItem= async(object)  =>{   
        try{
            const data = await this.getAll();
            if (data.length) {
                const oProducto= await { ...object, id: data[data.length-1].id+1 };
                data.push(oProducto);
            } else {
                const oProducto = await { ...object, id: 1 };
                data.push(oProducto);
            }
            return await this.saveData(data) 
        } catch (error) {
            console.warn({class:`class FileManager`, method:`addItem= async(object)`,description:error})
            throw new Error(error);
        }
    }

    updateById= async(object)  =>{   
        try {
            let data = await this.getData();
            data = data.map((item) => (item.id !== object.id ? item : object))
            await this.saveData(data) 
        } catch (error) {
            console.warn({class:`class FileManager`, method:`updateById= async(object) `,description:error})
            throw new Error(error);
        }
    }

    deleteById= async(id)=> {
        try {
            const data = await this.getAll();
            const dataWithOutItemProductId = data.filter( oProduto => oProduto.id != id);
            await this.saveData(dataWithOutItemProductId);
        } catch (error) {
            console.warn({class:`class FileManager`, method:`deleteById= async(idNumber)`,description:error})
            throw new Error(error);
        }   
    }
    deleteAll= async()=> {
        try{
            const arrayVacio = []
            await this.saveData(arrayVacio);
        } catch (error) {
            console.warn({class:`class FileManager`, method:`deleteAll= async()`,description:error})
            throw new Error(error);
        }
    }


    //////////////////////////////// Metodos Factorizados.
    getData= async()=> {
        try{
            if(fs.existsSync(this.path )){
                const data = await fs.promises.readFile(this.path , 'utf-8');
                return JSON.parse(data)
            }else{
                return [];
            }
        }
        catch(error){
            console.warn({class:`class FileManager`, method:`getData= async(object) `,description:error})
            throw new Error(error);
        }
    }
    saveData= async(data)=> {
        try{
            await fs.promises.writeFile(this.path , JSON.stringify(data, null, '\t'));
        }
        catch(e){
            console.warn({class:`class FileManager`, method:`saveData= async(object) `,description:error})
            throw new Error(error);
        }
    }

    //////////////////////////////// Metodos Complementarios.
    getNewId= async()=>{
        try{
            const data = await this.getAll();
            if (data.length) {
                return data[data.length-1].id+1;
            } else {
                return 1;
            }
        }
        catch(error){
            console.warn({class:`class FileManager`, method:`getNewId= async()`,description:error})
            throw new Error(error);
        }
    }

    // updateStockById= async(object)  =>{   
    //     try {
    //         let data = await this.getData();
    //         let item = data.find((item) => (item.id === object.id ))
    //         let { stock, ...itemRest } = item;
    //         stock = stock - object.quantity
    //         data = data.map((item) => (item.id !== object.id ? item : {...itemRest,stock } ))
    //         await this.saveData(data) 
    //     } catch (error) {
    //         console.warn({class:`class FileManager`, method:`updateById= async(object) `,description:error})
    //         throw new Error(error);
    //     }
    // }




    ///Temporal

    // getCount = async()=> {
    //     return  data = await this.getAll().count();
    // }

    // update = async(id, title, price, thumbnail) =>{
    //     const data = await this.getAll();
    //     let item = data.find(producto => producto.id == id);
        
    //     if (item) {
    //         item.title = title;
    //         item.price = price;
    //         item.thumbnail = thumbnail;
    //     }        
    //     let itemidex = data.findIndex(producto => parseInt(producto.id) === parseInt(item.id));
    //     console.log(itemidex)
    //     data.splice(itemidex, 1, item);
    //     console.log('NEW data: ',data)
    //     await this.deleteAll();
    //     await this.save(data);
    // }
} 
//module.exports = Contenedor
export default FileManager



