const { Router } = require('express')
const router = new Router()
const cartController = require('../Controllers/cart')


router.post('/', cartController.createNewCart)
router.post('/:id/productos/:id_prod', cartController.addProductToCart)
router.get('/:id/productos', cartController.cartProductList)
router.delete('/:id/productos/:id_prod', cartController.deleteProductFromCart)
router.delete('/:id', cartController.emptyCart)
module.exports = router
