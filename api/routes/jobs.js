const express = require('express')
const jobs = require('../controlers/jobs')
const router = express.Router()


router.get('/', jobs.getAllJobs)

router.post('/', jobs.postJobs)

router.get('/:jobId', jobs.getSingleJob)

module.exports =router