const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Esto solo va a funcionar si el archivo ya existe
class Productos {
    constructor(nombreArchivo) {
        this.archivo = nombreArchivo;
    }

    async getData() {
        const data = await fs.promises.readFile(this.archivo, 'utf-8'); //data = '[]'
        return JSON.parse(data);
    }

    async saveData(data) {
        await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
    }

    //GET
    async get() {
        const productos = await this.getData();
        return productos;
    }

    //GET BY ID
    async getById(number) {
        const productos = await this.getData();
    
        const indice = productos.findIndex((unProducto) => {
            if (unProducto.id === number) return true;
            else return false;
        });
    
        if (indice === -1) return null;
    
        return productos[indice];
    }

    
    //POST
    async post(miObjeto) {
        const productos = await this.getData();
        let id;

        const productoNuevo = {
            id: uuidv4(),
            nombre: miObjeto.nombre,
            precio: miObjeto.precio,
            thumbnail:miObjeto.thumbnail,
        };

        productos.push(productoNuevo);
        await this.saveData(productos);
    }
    //DELETE
    async delete(number) {
        const productos = await this.getData();

        const nuevoArray = productos.filter(
            (unProducto) => unProducto.id != number
        );

        await this.saveData(nuevoArray);
    }

    //UPDATE
    async update(id, nuevaData) {
        const productos = await this.get();

        const indice = productos.findIndex((unProducto) => unProducto.id === id);

            if (indice < 0) throw new Error('no existe el producto');

                const productUpdated = {id,...nuevaData,};

        productos.splice(indice, 1, productUpdated);

        await this.saveData(productos)

        return productUpdated
    }
}

const ProductosController = new Productos('productos.json');

module.exports = {
  ProductosController: ProductosController,
};