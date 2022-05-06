//----------* REQUIRE'S *----------//
const fileCRUD = require('../Classes/fileCRUD')
const productDB = new fileCRUD('products')
let isAdmin = true
const imgNOFound = 'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

//----------* PRODUCT CONTROLLER *----------//
const productController = {
  productList: async (req, res) => {
    try {
      const allProducts = await productDB.getAll()
      res.json(allProducts)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  getProductById: async (req, res) => {
    try {
      const prodId = req.params.id
      const productFound = await productDB.getById(prodId)

      if (!productFound) {
        res.send({ error: 'Product not found.' })
      } else {
        res.json(productFound)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addNewProduct: async (req, res) => {

    if(isAdmin)
    {
      try {
        const allProducts = await productDB.getAll()
        const noImage =imgNOFound;

        const isValidURL = (imageURL) => {
          let url
          try {
            url = new URL(imageURL)
          } catch (_) {
            return false
          }
          return url.protocol === 'http:' || url.protocol === 'https:'
        }

        const getNewId = () => {
          let lastID = 0
          if (allProducts.length) {
            lastID = allProducts[allProducts.length - 1].id
          }
          return lastID + 1
        }

        const newProduct = {
          id: getNewId(),
          nombre: req.body.nombre ? req.body.nombre : 'No name',
          descripcion: req.body.descripcion ? req.body.descripcion : 'No description',
          foto_url: isValidURL(req.body.foto_url) ? req.body.foto_url : noImage,
          precio: req.body.precio ? req.body.precio : 0,
          stock: req.body.stock ? req.body.stock : 0,
        }

        await productDB.addItem(newProduct)
        res.json(newProduct)
      } catch (error) {
        console.log(`ERROR: ${error}`)
      }
    }
    else {
      res.json(`User not Access , please login as admin`)
    }
  },

  editProduct: async (req, res) => {
    if(isAdmin)
    {
      try {
        const prodId = req.params.id
        const productFound = await productDB.getById(prodId)

        if (!productFound) {
          res.send({ error: 'Product not found.' })
        } else {
          const editedProduct = {
            id: productFound.id,
            nombre: req.body.nombre ? req.body.nombre : productFound.nombre,
            descripcion: req.body.descripcion ? req.body.descripcion : productFound.descripcion,
            foto_url: req.body.foto_url ? req.body.foto_url : productFound.foto_url,
            precio: req.body.precio ? req.body.precio : productFound.precio,
            stock: req.body.stock ? req.body.stock : productFound.stock,
          }

          await productDB.editById(editedProduct)

          res.json(editedProduct)
        }
      } catch (error) {
        console.log(`ERROR: ${error}`)
      }
    }
    else {
      res.json(`User not Access , please login as admin`)
    }      
  },

  deleteProduct: async (req, res) => {
    if(isAdmin)
    {
      try {
        const prodId = req.params.id
        const response = await productDB.deleteById(prodId)

        if (!response) {
          res.status(200).json({ error: `The product with ID ${prodId} does not exist.` })
        } else {
          res.status(200).json({ error : `The product with ID ${prodId} has been removed.`})
        }
      } catch (error) {
        console.log(`ERROR: ${error}`)
      }
    }
    else {
      res.json(`User not Access , please login as admin`)
    }         
  },
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = productController
