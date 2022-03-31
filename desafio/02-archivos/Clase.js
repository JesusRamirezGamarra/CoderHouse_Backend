//const fs = require('fs');
import fs from 'fs';

export class Contenedor {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo
    }


    async save(object) {   
        const data = await this.getAll();
        if (data.length) {
            const oProducto= await { ...object, id: data[data.length-1].id+1 };
            data.push(oProducto);
        } else {
            const oProducto = await { ...object, id: 1 };
            data.push(oProducto);
        }

        return await this.saveData(data) 
    }

    
    async getById (idNumber) {
        const data = await this.getAll();
        return data.find((element) => element.id == idNumber);
    }
    
    async getAll() {
        return  await this.getData();
    }
    
    async deleteById(idNumber) {
        const data = await this.getAll();
        const nuevoArray = data.filter( oProduto => oProduto.id != idNumber);
        await this.saveData(nuevoArray);
    }

    async deleteAll() {
        const arrayVacio = []
        await this.saveData(arrayVacio);
    }





    async getData() {
        try{
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            return JSON.parse(data)
        }
        catch(e){
            console.warn(`Fix : ${e}`)
            return[];
        }
    }

    async saveData(data) {
        try{
            await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
        }
        catch(e){
            console.warn(`Fix : ${e}`)
        }
    }



    // Metodo para preguntar al tutor
    async save_FormaII(product) {   
        const productos = await this.getAll();
        let id;
        if (productos.length === 0) id = 1;
        else id = productos[productos.length - 1].id + 1
        const productoNuevo = {
            id: id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        };
        productos.push(productoNuevo)
        await this.saveData(productos) 
        return productoNuevo.id      
    }

    async save_FormaIII(product) {   
        const productos = await this.getAll();

        id = (productos.length === 0) ? 1 : productos[productos.length - 1].id + 1;
        const productoNuevo = {id:id,title:product.title,price: product.price,thumbnail: product.thumbnail}

        productos.push(productoNuevo)
        await this.saveData(productos) 
        return productoNuevo.id      
    }    
} 




