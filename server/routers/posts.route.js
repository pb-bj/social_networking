const { createUserPost, readUserPost, readFeedPost,  updatePost, deletePosts } = require('../controllers/post.controller');

const router = require('express').Router();
const upload = require('../utils/fileUpload');

router.post('/create-post', upload.single('image'), createUserPost);
router.get('/read-post', readFeedPost);
router.get('/read-user-post/:id', readUserPost);
router.put('/update-post/:updatetId', updatePost);
router.delete('/delete-post/:deleteId', deletePosts);

module.exports = router;
