//----------* Imports'S *----------//
import crypto from 'crypto';
import {FileManager} from '../middleware/api/FileManager.js'
import {isValidURL } from '../utils.js'
const productDB = new FileManager('products')
const imgNOFound = 'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

//----------* PRODUCT CONTROLLER *----------//
export const productsController = {
  
  getProductById: async (req, res) => {
    try {
      const prodId = req.params.pid
      const productFound = await productDB.getById(prodId)

      if (!productFound) {
        res.status(200).send({description: `Product not found.`})
      } else {
        res.status(200).json({description:`Product found`,data:productFound})
      }
    } catch (error) {
      console.warn({class:`productsController`,method:`getProductById: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },

  getAllProductList: async (req, res) => {
    try {
      const allProducts = await productDB.getAll()
      res.status(200).json({description:`All Products Catalog`,data:allProducts})
    } catch (error) {
      console.warn({class:`productsController`,method:`getProductList: async (req, res)`,description: error})
      res.status(500).json({description: `Internal Server Error,please contact administrator `})
    }
  },


  addNewProduct: async (req, res) => {

      try {
        const allProducts = await productDB.getAll()
        const noImage =imgNOFound;
        
        const itemProduct = allProducts.find(item => item.code == req.body.code) 

        if(typeof (itemProduct) == 'undefined'){

          const newProduct = {
            id:  await productDB.getNewId(),
            timestamp:Date.now(),
            name: req.body.name ? req.body.name : 'No name',
            description: req.body.description ? req.body.description : 'No description',
            code: req.body.code ? req.body.code : crypto.randomUUID(),
            thumbnail: isValidURL(req.body.thumbnail) ? req.body.thumbnail : noImage,
            price: req.body.price ? parseInt( req.body.price ) : 0,
            stock: req.body.stock ? parseInt( req.body.stock ) : 0,
          }

          // console.log({newProduct : newProduct})
          await productDB.addItem(newProduct)
          res.status(201).json({description:`new product successfully created`,data:newProduct})
        }
        else {  
          res.status(422).json({description: `Product with code ${req.body.code} already exists, product not added.`})
        }
      } 
      catch (error) {
        console.warn({class:`productsController`,method:`addNewProduct: async (req, res)`,description:error})
        res.status(500).json({description: `Internal Server Error,please contact administrator`})        
      }

  },

  updatetProductById: async (req, res) => {

      try {
        const prodId = req.params.pid
        const productFound = await productDB.getById(prodId)

        if (!productFound) {
          res.status(422).json({ description: 'Product not found.' })
        } else {

          const editedProduct = {
            id:  productFound.id,
            timestamp:Date.now(),
            name: req.body.name ? req.body.name : productFound.name,
            description: req.body.description ? req.body.description : productFound.description,
            code: req.body.code ? req.body.code : productFound.code,
            thumbnail: isValidURL(req.body.thumbnail) ? req.body.thumbnail : noImage,
            price: req.body.price ? parseInt( req.body.price ) : productFound.price,
            stock: req.body.stock ? parseInt( req.body.stock ) : productFound.stock,
          }

          await productDB.updateById(editedProduct)

          res.status(200).json({description:`Product with id=${prodId} updated`})
        }
      } catch (error) {
        console.warn({class:`productsController`,method:`updatetProduct: async (req, res)`,description:error})
        res.status(500).json({description: `Internal Server Error,please contact administrator`})        
      }
  },

  deleteProductById: async (req, res) => {

      try {
        const prodId = req.params.pid
        const productFound = await productDB.getById(prodId)
        
        if (!productFound) {
          res.status(422).json({ description: 'Product not found.' })
        } else {
          await productDB.deleteById(prodId)
          res.status(200).json({ description : `The product with id=${prodId} has been removed.`})
        }
      } catch (error) {
        console.warn({class:`productsController`,method:`deleteProduct: async (req, res)`,description:error})
        res.status(500).json({description: `Internal Server Error,please contact administrator`})   
      }
  }
}
//----------* EXPORTS CONTROLLER *----------//
export default productsController