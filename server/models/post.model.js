const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({    
    userId: { 
        type: ObjectId, 
        ref: 'User',
        required: true 
    },
    content: { 
        type: String,
        required : true
    },
    image : {
        type : String,
    },
    likes : [
        { type : String 
    }],
    followers : {
        type : Array,
        default : []
    },
    following : {
        type : Array,
        default : []
    },
  }, { timestamps : true });

  module.exports = mongoose.model('Post', postSchema);