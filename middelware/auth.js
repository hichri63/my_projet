const jwt=require("jsonwebtoken")
const jwSecret="secret"


module.exports=function(req,res,next){
    //Get token from the header
    const token=req.header('x-auth-token')
    //chek if toekn exists
    if(!token){
        return res.json({msg:"No token exist"})
    }
    jwt.verify(token,jwSecret,(err,decoded)=>{
        if (err) {
            return res.json({msg:"token expired"})
        }
        req.user=decoded.user
       next()
    })
     
}