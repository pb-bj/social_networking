const { createUserPost, readUserPost, readFeedPost,  updateUserPost, deletePosts } = require('../controllers/post.controller');

const router = require('express').Router();
const upload = require('../utils/fileUpload');

router.post('/create-post', upload.single('image'), createUserPost);
router.get('/get-feed-post', readFeedPost);
router.get('/get-user-post/:id', readUserPost);
router.put('/update-post/:id', upload.single('image'), updateUserPost);
router.delete('/delete-post/:deleteId', deletePosts);

module.exports = router;
