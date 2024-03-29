const { getUserDetails, updateUserDetails, deleteUserDetails } = require('../controllers/user.controller');
const { authMiddleware } = require('../middleware/auth.middleware');
const { followUser,unfollowUser } = require("../controllers/user.controller");
const router = require('express').Router();


router.get('/user-profile/:id', getUserDetails);
router.put('/user-profile/edit/:id', authMiddleware, updateUserDetails);
router.delete('/user-profile/delete/:id', authMiddleware, deleteUserDetails);



router.put('/follow/:id',authMiddleware,followUser)
router.put('/unfollow/:id',authMiddleware,unfollowUser)

module.exports = router;