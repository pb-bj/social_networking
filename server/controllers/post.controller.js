const PostModel = require('../models/post.model');

exports.createUserPost = async (req, res) => {
    try {
        const { userId, content } =  req.body;
        if( !req.file ) {
            return res.status(400).json({ error : 'Please provide the image for your post' })
        }
            let newPost = await PostModel.create({ userId, content, image : req.file?.path });
                if(!newPost) {
                    return res.status(406).json({ error : 'Failed to create a post' });
                }
                res.status(201).json(newPost);
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
};

exports.readFeedPost = async (req, res) => {
    try {
        let posts = await PostModel.find();
            if(!posts) {
                return res.status(404).json({ error : 'No post available!' });
            }
            res.status(200).json(posts);
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
};

exports.readUserPost = async ( req, res) => {
    try {
        const { userId } = req.params 
        let post = await PostModel.findById({ userId });
            if(!post) {
                return res.status(404).json({ error : 'No post available!' });
            }
            res.status(200).status(post);
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
}

exports.updatePost = async (req, res) => {
    const { content, postImg } = req.body;
    try {
        let post = await PostModel.findByIdAndUpdate( req.params.id, {content, postImg }, { new : true });
            if(!post) {
                return res.status(400).json({ error : 'Failed to update post' });
            }
            res.status(200).json({ message : 'Post updated successfully' });
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
};

exports.deletePosts = async (req, res) => {
    try {
         let post = await PostModel.findByIdAndDelete(req.params.id);
            if(!post) {
                return res.status(404).json({ error : 'Not Found' });
            }
            res.status(200).json({ message : 'post deleted successfully' });
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
}