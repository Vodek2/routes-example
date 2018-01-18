const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./api/routes/routes')

app.use(bodyParser)

app.use('/jobs', routes.jobs)
app.use('/users', routes.users)

module.exports = app