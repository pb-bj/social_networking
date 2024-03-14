const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const likeSchema = new mongoose.Schema({
    userID: {
        type: ObjectId, 
        ref: 'User', 
        required: true 
    },
    postID: { 
        type: ObjectId, 
        ref: 'Post', 
        required: true 
    }
});

module.exports = mongoose.model('Like', likeSchema);