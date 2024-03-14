const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const userSchema = new mongoose.Schema({
    userid: {
        type: ObjectId,
        required: true,
        unique: true
    },
    name: { 
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        required: true 
    },
    profilePicture: { 
        type: String 
    }
})

module.exports = mongoose.model("User", userSchema)