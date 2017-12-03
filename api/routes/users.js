const express = require('express')
const users = require('../controlers/users')
const router = express.Router()


router.get('/', users.getAllUsers)

router.post('/', users.postUsers)

router.get('/:userId', users.getSingleUser)

module.exports =router