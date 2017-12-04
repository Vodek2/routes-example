// const express = require('express')
// const pr = express()


const jobs = {
    getAllJobs:(req,res,next)=>{
        return res.status(200).json({
            message:'Get from jobs controler'
        })
        next()
    },
    postJobs:(req, res, next)=>{
        return res.status(200).json({
            message:'Post from jobs controler'
        })
        next()
    },
    getSingleJob:(req, res, next)=>{

        const id = req.params.jobId
        return res.status(200).json({
            message:'Get from jobs controler , requested id: '+id
        })

        next()

    }


}





module.exports = jobs