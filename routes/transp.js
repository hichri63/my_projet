const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const User = require('../models/User')

const jwtSecret="secret"


router.post('/',[
    check('first_name','Please enter your firstname').not().isEmpty(),
    check('last_name','Please enter your lastname').not().isEmpty(),
    check('email','Please enter valid email').isEmail(),
    check('password','Password must be 6 or more characters').not().isEmpty().isLength({min:6}),
    check('phone', 'Please enter your Num_phone').not().isEmpty(),
    check('role', 'Please enter your Role').not().isEmpty()
],  
(req, res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.json({errors:errors.array()})
    }
 
    const {first_name,last_name,email,password,phone,role}=req.body
    User.findOne({email})
    .then(user=>{
        if(user){
            res.status(400).json({msg:'user already exist'})
        }else {
             user =  new User({
                 first_name, 
                 last_name,
                 email,
                 password,
                 phone,
                 role
 
             })
             
             bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(user.password,salt,(err,hashedPassword)=>{
                    user.password=hashedPassword
             
 
                     user.save()
                     const payload={
                        user :{
                            id:user.id
                        }
                    }
                    jwt.sign(payload,jwtSecret,{expiresIn:3600000},(err,token)=>{
                        if(err) throw err
                        res.json({token})
                    })
                  
                })
            })

      
        }
      
   })
   .catch(err=>console.log(err))
   
})

module.exports = router