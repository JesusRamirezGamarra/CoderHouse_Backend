// import fs from 'fs';
const fs = require('fs');

class Contenedor {
  constructor(route) {
    this.route = route;
  }
  async writeFile(input) {
    fs.promises.writeFile(this.route, JSON.stringify(input));
  }
  async getAll() {
    try {
      const allItems = JSON.parse(  await fs.promises.readFile(this.route, 'utf-8') )
      return allItems
    } catch (ex) {
      console.error(ex);
      await fs.promises.writeFile(this.route, JSON.stringify([]), 'utf-8')
      const allItems = JSON.parse(  await fs.promises.readFile(this.route, 'utf-8') )
      return allItems
  }    
  }
  async save(nombre, descripcion, foto, precio,stock) {
    try {
      let data = await this.getAll();
      data.push({
        id: !data.length ? 1 : parseInt(data[data.length - 1].id) + 1,
        nombre,
        descripcion,
        foto,
        precio,
        stock,
      });
      await this.writeFile(data);
    } catch (ex) {
      console.error(ex);
    }
  }

  async getById(item) {
    try {
      const data = await this.getAll();
      return data.find((e) => e.id == item);
    } catch (ex) {
      console.error(ex);
    }
  }

  async deleteById(id) {
    try {
      const data = await this.getAll();
      const index = data.findIndex((e) => e.id == id);
      if (index > -1) {
        const newData = data.slice(0, index).concat(data.slice(index + 1));
        await this.writeFile(newData);
        return true;
      }
      return false;
    } catch (ex) {
      console.error(ex);
    }
  }

  async updateProduct(id, nombre, descripcion, foto, precio,stock) {
    try {
      const data = await this.getAll();
      const index = data.findIndex((obj) => obj.id == id);
      if (index > -1) {
        data[index] = {
          id: id,
          nombre: nombre || data[index].nombre,
          descripcion: descripcion || data[index].descripcion,
          foto: foto || data[index].foto,
          precio: precio || data[index].precio,
          stock: stock || data[index].stock
        };
        await this.writeFile(data);
        return true;
      } else {
        return false;
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.route, JSON.stringify([]));
    } catch (ex) {
      console.error(ex);
    }
    console.log('Todos los elementos han sido eliminados');
  }

  async addNewCart() {
    try {
          const data = await this.getAll();
          console.log(data)
          const id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
          data.push({ id: id,productos: [], });
          await this.writeFile(data);
          return id;
    } catch (ex) {
      console.error(ex);
    }
  }

  async addToCart(id, idProduct) {
    try {
      const carts = await this.getAll();
      const cart = await this.getById(id);
      const productToAdd = await this.getById(idProduct);

      if (cart && productToAdd) {
        carts[cart.id - 1].productos.push(productToAdd);
        await this.writeFile(carts);
        return true;
      } else if (!cart) {
        return 'No encontramos el carrito que buscas.';
      } else if (!productToAdd) {
        return 'No existe ese producto.';
      }
    } catch (ex) {
      console.error(ex);
    }
  }
  async getCartProducts(id) {
    try {
      const carts = await this.getAll();
      const cart = await this.getById(id);
      return cart ? cart.productos : undefined;
    } catch (ex) {
      console.error(ex);
    }
  }

  async deleteProductFromCart(id, idProduct) {
    try {
      const carts = await this.getAll();
      const cart = await this.getById(id)
      if(!cart) return `No encontramos el carrito que buscas...`
      const productIndex = cart.productos.findIndex(prod=> prod.id == idProduct)
      const cartIndex = carts.findIndex(cart=> cart.id == id)
      if (productIndex > -1) {
        carts[cartIndex].productos = cart.productos.slice(0, productIndex).concat(cart.productos.slice(productIndex + 1));
        await this.writeFile(carts);
        return true;
      } else if(productIndex == -1){
        return `No encontramos ese producto en tu carrito`
      }
    } catch (ex) {
      console.error(ex)
    }
  }
  async emptyCart(id){
    try {
      const carts = await this.getAll()
      const cart = await this.getById(id)
      if(!cart)return `No encontramos el carrito!`
      const index = carts.findIndex(cart=>cart.id == id)
      carts[index].productos = []
      await this.writeFile(carts)
      return true
    } catch (ex) {
      console.error(ex)
    }
  }
}


module.exports = Contenedor
// const products = new Contenedor('./src/databases/products.json');
// const carts = new Contenedor('./src/databases/carts.json');

// export const products = new Contenedor('./src/databases/products.json');
// export const carts = new Contenedor('./src/databases/carts.json');
