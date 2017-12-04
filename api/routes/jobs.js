const express = require('express')
const jobs = require('../controlers/jobs')
const jobsRouter = express.Router()

const routeGuard = require('../middlewares/route-guard')

// jobsRouter.use(routeGuard)


jobsRouter.get('/',  jobs.getAllJobs)

jobsRouter.post('/', routeGuard, jobs.postJobs)

jobsRouter.get('/:jobId', jobs.getSingleJob)

module.exports = jobsRouter