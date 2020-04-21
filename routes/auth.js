const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../middelware/auth')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')

const jwtSecret="secret"


//Get the user logged in
// Private router
router.get('/', auth,(req,res)=>{
   User.findById(req.user.id)
       .then(user=>res.json(user))
       .catch (err=> console.log(err.message))
})
//login the user
router.post('/',[
    check("email","Please include a valid email").isEmail(),
    check("password","Password is required").not().isEmpty()
],(req,res)=>{
    const errors=validationResult(req)
   if(!errors.isEmpty()){
       res.json({errors:errors.array()})
   }
 const {email,password}=req.body
 //check if user exist
 User.findOne({email})
      .then(user=>{
     //check if user exist
     if (!user) {
         return res.status(404).json({msg: "Please register before"})
     }else {
         //compare password
         bcrypt.compare(password,user.password,(err, isMatch)=>{
             if (err){
                 console.log(err.messsage)
             }else if(isMatch) {
                 const payload={
                     user:{
                         id:user.id
                     }
                 }
                 jwt.sign(payload, jwtSecret, {expiresIn:36000}, (err,token)=>{
                     if (err) throw err
                     res.json({token})
                 })

             }else {
                 return res.status(401).json({msg: "wrong password"})
             }

         })
     }
     
 })
 .catch(err=>console.log(err.message))
   
})
module.exports=router