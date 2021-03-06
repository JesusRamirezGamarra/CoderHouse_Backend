//const fs = require('fs');
// import fs from 'fs';
// const path = 'src/database/files/productos.json';

export class Productos {
    constructor() {
        this.productos = [];
    }

    guardar(title, price, thumbnail) {
        try {
            this.productos.push({
                id: this.productos.length + 1,
                title: title,
                price: price,
                thumbnail: thumbnail
            });
        } 
        catch (error) { 
            throw error;
        }
    }

    getProductos() {
        return this.productos;
        //return JSON.stringify(this.productos, null, '\t');
    }
    

    listar(id) {
        const producto = this.productos.find(producto => producto.id == id);
        return producto;
    }

    actualizar(id, title, price, thumbnail) {
        let item = this.productos.find(producto => producto.id == id)
        if (item) {
            item.title = title;
            item.price = price;
            item.thumbnail = thumbnail;
        }        
        let itemIndex = this.productos.findIndex(producto => parseInt(producto.id) === parseInt(item.id));
        console.log(itemIndex)
        this.productos.splice(itemIndex, 1, item);
        // console.log('NEW data: ',data)
        // this.productos = data;
        // await this.deleteAll();
        // await this.save(data);

        // const producto = this.productos.find(producto => producto.id == id);
        // if (producto) {
        //     producto.title = title;
        //     producto.price = price;
        //     producto.thumbnail = thumbnail;
        // }
    }

    eliminar (id){
        const producto = this.productos.find(producto => producto.id == id);
        if (producto) {
            this.productos = this.productos.filter(producto => producto.id != id);
        }        
    }
}

// exporto una instancia de la clase
// module.exports = Productos;
