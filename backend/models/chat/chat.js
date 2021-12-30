const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatModels = new Schema({
    message : {
        type: String,
        require : true,
    },
    userId : {
        type : String,
        require : true,
        ref : 'users'
    },
    createDate : {
        type : Date,
        require : true,
    }
})

module.exports = mongoose.model("chat", chatModels)