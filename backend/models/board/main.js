const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainModels = new Schema({
    title:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    contents:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.type.userId,
        required : true,
        ref :'users'
    },
    createDate:{
        type: Date,
        required:true
    }
})

module.exports = mongoose.model("main", mainModels)