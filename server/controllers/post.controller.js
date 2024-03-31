const PostModel = require('../models/post.model');

exports.createUserPost = async (req, res) => {
    try {
        const { content } = req.body;
        const userId = req.user._id;
        if (!req.file) {
            return res.status(400).json({ error: 'Please provide the image for your post' })
        }
        let newPost = await PostModel.create({ userId, content, image: req.file?.path });
        if (!newPost) {
            return res.status(406).json({ error: 'Failed to create a post' });
        }
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

exports.readFeedPost = async (req, res) => {
    try {
        let posts = await PostModel.find().populate('userId');
        if (!posts || posts.length === 0) {
            return res.status(404).json({ error: 'No post available!' });
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.readUserPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user._id;
        let post = await PostModel.findById({ _id: postId, userId });
        if (!post) {
            return res.status(404).json({ error: 'No post available!' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.updateUserPost = async (req, res) => {
    const { content } = req.body;
    const userId = req.user._id;
    const postId = req.params.id;

    try {
        const post = await PostModel.findByIdAndUpdate({
            _id: postId, userId
        },
            { $set: { content }, new: true }
        );

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (req.file) {
            post.image = req.file.path;
            await post.save();
        }

        res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

exports.deletePosts = async (req, res) => {
    try {
        const userId = req.user._id;
        const postId = req.params.id;

        const post = await PostModel.findByIdAndDelete({ _id: postId, userId });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};



// like and unlike posts
exports.likePost = async (req, res) => {
    const PostId = req.params.id
    const userId = req.user._id

    try {
        const post = await PostModel.findById(PostId)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            return res.status(200).json({ message: "Post liked" })
        }
        else {
            await post.updateOne({ $pull: { likes: userId } })
            return res.status(200).json({ message: "Post unliked" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}
