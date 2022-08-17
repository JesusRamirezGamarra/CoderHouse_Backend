//----------* REQUIRE'S *----------//
// import {Contenedor} from '../middleware/api/FileManager.js';
// const database = new Contenedor('products');
import KnexContainer from '../middleware/api/knexContainer.js';
import config from '../config/mariaDB.js';
const sqlClient = new KnexContainer(config, 'products')
const imgNOFound = 'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'

//----------* PRODUCTS ROUTES *----------//
const productsRouter = {
  createProductsTable: async () => {
    try {
      await sqlClient.createTable()
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }, 
  getAllProduct: async () => {
    try {
      const allProducts = await database.getAll()
      return allProducts.sort((a, b) => (a.id > b.id ? -1 : 1)) // Generamos un ordenamiento descendente por id.
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addNewProduct: async (product) => {
    try {
      const prevProducts = await database.getAll()
      const noImage = imgNOFound
        

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

      await database.save(newProduct)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },
}

//----------* EXPORTS CONTROLLER *----------//
export default productsRouter;

