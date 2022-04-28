//----------* REQUIRE'S *----------//
const Controller = require('../classes/fileManagement')
const productDB = new Controller('products')

//----------* PRODUCTS ROUTES *----------//
const productsController = {
  getAllProduct: async () => {
    try {
      const allProducts = await productDB.getAll()
      return allProducts
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addNewProduct: async (product) => {
    try {
      const prevProducts = await productDB.getAll()
      const noImage =
        'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

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
        if (prevProducts.length) {
          lastID = prevProducts[prevProducts.length - 1].id
        }
        return lastID + 1
      }

      const newProduct = {
        id: getNewId(),
        title: product.title ? product.title : 'No Title',
        price: product.price ? product.price : 0,
        thumbnail: isValidURL(product.thumbnail) ? product.thumbnail : noImage,
      }

      await productDB.addItem(newProduct)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = productsController
