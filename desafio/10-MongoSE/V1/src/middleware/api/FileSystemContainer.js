//const fs = require('fs');
import fs from 'fs';
//import __dirname from '../../utils.js';
//const path = 'src/files/productos.json';
import config from '../../config.js'

export class FileSystemContainer {
    constructor(nombreArchivo) {
        console.log(config.fileSystem.path)
        //this.path = __dirname + '/assets/database/' + nombreArchivo + '.json';
        this.path = config.fileSystem.path + nombreArchivo + '.json';
    }

    getById= async(id) => {
        try {
            const data = await this.getAll();
            return data.find((element) => element.id == id);
        } catch (error) {
            console.warn({class:`class FileManager`, method:`getById= async(id)`,description:error})
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

    //----------* Metodos Factorizados*----------//
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
        catch(error){
            console.warn({class:`class FileManager`, method:`saveData= async(object) `,description:error})
            throw new Error(error);
        }
    }

        //----------* Metodos Complementarios*----------//
    // getNewId= async()=>{
    //     try{
    //         const data = await this.getAll();
    //         if (data.length) {
    //             return data[data.length-1].id+1;
    //         } else {
    //             return 1;
    //         }
    //     }
    //     catch(error){
    //         console.warn({class:`class FileManager`, method:`getNewId= async()`,description:error})
    //         throw new Error(error);
    //     }
    // }

    // // async addItemInto(containerId, object) {
    // // try {
    // //     let allItems = await this.readFile()
    // //     let itemFound = allItems.find((item) => item.id === Number(containerId))
    // //     itemFound.productos.push(object)
    // //     allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
    // //     await this.writeFile(allItems)
    // // } catch (error) {
    // //     throw new Error(`Error adding item into: ${error}`)
    // // }
    // // }

    // // async removeItemFrom(containerId, objectId) {
    // // try {
    // //     let allItems = await this.readFile()
    // //     let itemFound = allItems.find((item) => item.id === Number(containerId))
    // //     itemFound.productos = itemFound.productos.filter((item) => item.id !== Number(objectId))
    // //     allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
    // //     await this.writeFile(allItems)
    // // } catch (error) {
    // //     throw new Error(`Error deleting item from: ${error}`)
    // // }
    // // }

    // // async emptyContainer(containerId) {
    // // try {
    // //     let allItems = await this.readFile()
    // //     let itemFound = allItems.find((item) => item.id === Number(containerId))
    // //     itemFound.productos = []
    // //     allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
    // //     await this.writeFile(allItems)
    // // } catch (error) {
    // //     throw new Error(`Error emptying container: ${error}`)
    // // }
    // //   }
}
export default FileSystemContainer




