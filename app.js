const express = require('express')
const app = express()

const jobsRoutes = require('./api/routes/jobs')
const usersRoutes = require('./api/routes/users')

app.use('/jobs', jobsRoutes)
app.use('/users', usersRoutes)

module.exports = app