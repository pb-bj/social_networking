const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const likeSchema = new mongoose.Schema({
    user: {
        type: ObjectId, 
        ref: 'User', 
        required: true 
    },
    post: { 
        type: ObjectId, 
        ref: 'Post', 
        required: true 
    }
});

module.exports = mongoose.model('Like', likeSchema);