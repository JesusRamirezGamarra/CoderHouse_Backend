//----------* REQUIRE'S *----------//
const { Router } = require('express')
const router = new Router()
const cartController = require('../Controllers/cart')

//----------* CART ROUTES *----------//
// Get Cart List
router.get('/', cartController.cartList)

// Get Cart by ID
router.get('/:id', cartController.getCartById)









// Create New Cart
router.post('/', cartController.createNewCart)

// Add Product to Cart
router.post('/:id/productos/:id_prod', cartController.addProductToCart)


// Get Cart Product List
router.get('/:id/productos', cartController.cartProductList)



// Delete Product from Cart
router.delete('/:id/productos/:id_prod', cartController.deleteProductFromCart)

// Empty Cart
router.delete('/:id', cartController.emptyCart)




//----------* EXPORTS ROUTER *----------//
module.exports = router
