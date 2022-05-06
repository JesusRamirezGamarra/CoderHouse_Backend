//----------* REQUIRE'S *----------//
const { Router } = require('express')
const router = new Router()
const productController = require('../Controllers/product')

//----------* PRODUCT ROUTES *----------//
// Get Product List
router.get('/', productController.productList)

// Get Product by ID
router.get('/:id', productController.getProductById)

// Add New Product
router.post('/', productController.addNewProduct)

// Edit Product by ID
router.put('/:id', productController.editProduct)

// Delete Product by ID
router.delete('/:id', productController.deleteProduct)


//----------* EXPORTS ROUTER *----------//
module.exports = router
