const express = require('express')
const products = require('../controlers/products')
const router = express.Router()


router.get('/', products.getAllProducts)

router.post('/', products.postProducts)

router.get('/:prodId', products.getSingleProduct)

module.exports =router