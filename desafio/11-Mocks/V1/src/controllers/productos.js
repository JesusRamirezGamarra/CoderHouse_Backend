//import { ProductosController } from "../api/apiArchivo";
import { DBService } from "../api/apiSQL.js";
// import { ProductosController } from '../api/apiFaker.js'
import oProductosController from '../api/apiFaker.js'


export const checkBodyProduct = async (req, res, next) => {
  const {nombre, precio, thumbnail} = req.body;

  if (!nombre || !precio || !thumbnail)
    return res.status(400).json({
      msg: 'missing Body fields',
    });
  next();
};

export const fakerProducts = async(req,res) => {
  try {
    const productos = await oProductosController.get()

    res.json({
      data: productos,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
}

export const getAllProducts = async (req, res) => {
  try {
    
    const productos = await oProductosController.get()

    res.json({
      data: productos,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { nombre, precio, thumbnail} = req.body;
    const newProduct = { nombre, precio, thumbnail }
    const id = await  DBService.post('productos', newProduct)
    console.log(id)
    const data = await DBService.get('productos', id)
    console.log(data)

    res.json({
      // data: newProduct,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await DBService.get('productos', id)

    if (!producto)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: producto,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, thumbnail} = req.body;

    let productToUpdate = { nombre, precio, thumbnail}

    const producto = DBService.get('productos', id)
      if (!producto)
        return res.status(404).json({
          msgs: 'Product not found!',
        });
      else  await DBService.get('productos', id)
            const productUpdated = await DBService.update('productos',id, productToUpdate)

    res.json({
      msg: 'Product updated',
      data: productUpdated,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await DBService.get('productos')
      if (!producto)
        return res.status(404).json({
          msgs: 'Product not found!',
        });
        else await DBService.delete('productos', id)


    res.json({
      msg: 'product deleted',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
