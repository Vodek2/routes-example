const usersModel = require('../models/users')

const users = {
    getAllUsers:(req,res)=>{
        return res.status(200).json({
            users:usersModel,
            message:'Get from users controller'
        })
    },
    postUsers:(req, res)=>{
        return res.status(200).json({
            message:'Post from users controller'
        })
    },
    getSingleUser:(req, res)=>{
        const id = req.params.userId
        let userResp= usersModel.filter((user)=>{
            if(user.id == id){
                return user
            }
        })

        return res.status(200).json({
            user:userResp[0],
            message:'Get from users controller, requested id =  '+id
        })

    }


}





module.exports = users


