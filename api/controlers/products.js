// const express = require('express')
// const pr = express()


const products = {
    getAllProducts:(req,res)=>{
        return res.status(200).json({
            message:'Get from products controler'
        })
    },
    postProducts:(req, res)=>{
        return res.status(200).json({
            message:'Post from products controler'
        })
    },
    getSingleProduct:(req, res)=>{

        const id = req.params.prodId
        return res.status(200).json({
            message:'Get from products controler '+id
        })

    }


}





module.exports = products