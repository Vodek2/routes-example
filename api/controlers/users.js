const users = {
    getAllUsers:(req,res)=>{
        return res.status(200).json({
            message:'Get from users controler'
        })
    },
    postUsers:(req, res)=>{
        return res.status(200).json({
            message:'Post from users controler'
        })
    },
    getSingleUser:(req, res)=>{

        const id = req.params.userId
        return res.status(200).json({
            message:'Get from users controler '+id
        })

    }


}





module.exports = users


