const { createUserPost, readUserPost, readFeedPost,  updateUserPost, deletePosts, likePost } = require('../controllers/post.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = require('express').Router();
const upload = require('../utils/fileUpload');

router.post('/create-post', authMiddleware , upload.single('image'), createUserPost);
router.get('/get-feed-post', readFeedPost);
router.get('/get-user-post/:id', authMiddleware , readUserPost);
router.put('/update-post/:id', authMiddleware ,upload.single('image'), updateUserPost);
router.delete('/delete-post/:id',authMiddleware , deletePosts);


// router.put('/like',authMiddleware,likePost);


module.exports = router;
