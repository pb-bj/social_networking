const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, 
        trim: true 
    },
    lastName: {
        type: String,
        required: true, 
        trim: true 
    },
    gender: {
        type: String,
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        minLength : 6,
        required: true 
    },
    image : {
        type : String,
        default : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    followers : {
        type : [String],
        default : [] 
    },
    followings : {
        type : [String],
        default : [] 
    },
}, { timestamps : true } );

module.exports = mongoose.model("User", userSchema)