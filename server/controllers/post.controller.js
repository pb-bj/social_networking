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
        res.status(500).json({ message : error.message });
        console.log(error);
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
        let post = await PostModel.findById(req.params.id);
            if(!post) {
                return res.status(404).json({ error : 'No post available!' });
            }
            res.status(200).json(post);
    } catch(error) {
        res.status(500).json({ error : 'Internal Server Error' });
    }
}

exports.updateUserPost = async (req, res) => {
    const { userId, content } = req.body;
    try {
        const post = await PostModel.findByIdAndUpdate(req.params.id,{ userId, content }, { new: true } );

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (post.userId.toString() !== userId) {
            return res.status(403).json({ error: 'You can update only your post' });
        }

        // Handle file upload if needed
        if (req.file) {
            post.image = req.file.path; 
            await post.save(); 
        }

        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
         res.status(500).json({ message : error.message });
        console.log(error);
    }
};


// exports.deletePosts = async (req, res) => {
//     try {
//          let post = await PostModel.findById(req.params.id);
//          if(post.userId === req.body.userId) {
//                 await post.deleteOne();
//             res.status(200).json({ message : 'post deleted successfully' });
//          } else {
//                  return res.status(404).json({ error : 'Not Found' });
//          }
//     } catch(error) {
//         res.status(500).json({ message : error.message });
//         console.log(error);
//     }
// }

exports.deletePosts = async (req, res) => {
    try {
        const  { userId } = req.body;
        const post = await PostModel.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (post.userId.toString() !== userId) {
            return res.status(403).json({ error: 'You can delete only your post' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message : error.message });
        console.error(error);
    }
};
