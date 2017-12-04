const express = require('express')
const users = require('../controlers/users')
const usersRouter = express.Router()


usersRouter.get('/', users.getAllUsers)

usersRouter.post('/', users.postUsers)

usersRouter.get('/:userId', users.getSingleUser)

module.exports =usersRouter