const mongoose=require('mongoose');
const AnnonceSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    Datedep:{
        type:String,
        required:true
    },
    villedep:{
        type:String,
        required:true
    },
    villearr:{
        type:String,
        required:true
    },
    imagevoiture:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('annonce',AnnonceSchema)