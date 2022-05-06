const { Router } = require('express')
const router = new Router()
const productController = require('../Controllers/product')

router.get('/', productController.productList)
router.get('/:id', productController.getProductById)
router.post('/', productController.addNewProduct)
router.put('/:id', productController.editProduct)
router.delete('/:id', productController.deleteProduct)
module.exports = router
