const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    
    userID: { 
        type: ObjectId, 
        ref: 'User',
        required: true 
    },

    content: { 
        type: String, 
        required: true 
    },

    PostedAt: { 
        type: Date, 
        default: Date.now ()
    }
  });

  module.exports = mongoose.model('Post', postSchema);