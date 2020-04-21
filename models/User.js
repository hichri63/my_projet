const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
  
    phone:{
        type:Number,
        require:true
    },
    role:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('user', UserSchema)   