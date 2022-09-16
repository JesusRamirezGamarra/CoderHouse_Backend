import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'; 

faker.locale = 'es';
const fakerDB = [];

for(let i =0; i<5; i++){
    fakerDB.push({
        id:faker.database.mongodbObjectId(),
        name: faker.commerce.product(),
        price:faker.commerce.price(100, 4500, 0),
        //thumbnail:faker.image.imageUrl()
        thumbnail: `${faker.image.imageUrl()}?r=${uuidv4()}`
    })
}

class Productos {
    constructor(nombreArray) {
        this.arrayContenedor = nombreArray;
    }

    //GET
    async get() {
        const productos = await this.arrayContenedor;
        return productos;
    }
}


export const oProductosController = new Productos(fakerDB);

export const ProductosController = {
    ProductosController: oProductosController,
};

// const ProductosController = new Productos(fakerDB);
// module.exports = {
//     ProductosController: ProductosController,
// };

export default oProductosController