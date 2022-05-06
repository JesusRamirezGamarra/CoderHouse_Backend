const fileCRUD = require('../Classes/fileCRUD')
const cartDB = new fileCRUD('carts')
const productDB = new fileCRUD('products')


const cartController = {
  cartList: async (req, res) => {
    try {
      const allCarts = await cartDB.getAll()
      res.json(allCarts)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  getCartById: async (req, res) => {
    try {
      console.log('getCartById')
      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        res.json(cartFound)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  cartProductList: async (req, res) => {
    try {

      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        res.json(cartFound.productos)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  createNewCart: async (req, res) => {
    try {
      
      const allCarts = await cartDB.getAll()
      const getNewId = () => {
        let lastID = 0
        if (allCarts.length) {
          lastID = allCarts[allCarts.length - 1].id
        }

        return lastID + 1
      }

      const newCart = {
        id: getNewId(),
        productos: [],
      }

      await cartDB.addItem(newCart)
      res.json(newCart.id)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addProductToCart: async (req, res) => {
    try {
      const cartId = req.params.id
      const prodId = req.params.id_prod

      const cartFound = await cartDB.getById(cartId)
      const productFound = await productDB.getById(prodId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else if (!productFound) {
        res.send({ error: 'Product not found.' })
      } else {
        await cartDB.addItemInto(cartFound.id, productFound)
        const updatedCart = await cartDB.getById(cartId)
        res.json(updatedCart)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  deleteProductFromCart: async (req, res) => {
    try {
      const cartId = req.params.id
      const prodId = req.params.id_prod

      const cartFound = await cartDB.getById(cartId)
      const productFound = await productDB.getById(prodId)

      console.log('deleteProductFromCart')

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else if (!productFound) {
        res.send({ error: 'Product not found.' })
      } else {
        await cartDB.removeItemFrom(cartFound.id, productFound.id)
        const updatedCart = await cartDB.getById(cartId)
        res.json(updatedCart)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  emptyCart: async (req, res) => {
    try {
      const cartId = req.params.id
      const cartFound = await cartDB.getById(cartId)

      if (!cartFound) {
        res.send({ error: 'Cart not found.' })
      } else {
        await cartDB.emptyContainer(cartId)
        const updatedCart = await cartDB.getById(cartId)
        res.json(updatedCart)
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },
}

module.exports = cartController
