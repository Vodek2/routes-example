const routeGuard = (req, res, next)=>{
    if(req.headers.authorization != 123){
        return res.status(403).json({
            error:1,
            message:"You shall no pass!!"
        })
    }
    // console.log(req.headers.authorization)
    return next()
}

module.exports = routeGuard