const express = require('express')
const app = express()

const routes = require('./api/routes/routes')

app.use('/jobs', routes.jobs)
app.use('/users', routes.users)

module.exports = app