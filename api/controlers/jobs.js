// const express = require('express')
// const pr = express()


const jobs = {
    getAllJobs:(req,res)=>{
        return res.status(200).json({
            message:'Get from jobs controler'
        })
    },
    postJobs:(req, res)=>{
        return res.status(200).json({
            message:'Post from jobs controler'
        })
    },
    getSingleJob:(req, res)=>{

        const id = req.params.jobId
        return res.status(200).json({
            message:'Get from jobs controler , requested id: '+id
        })

    }


}





module.exports = jobs