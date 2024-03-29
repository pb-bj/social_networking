const { followUser,unfollowUser } = require("../controllers/user.controller");
const { authMiddleware } = require('../middleware/auth.middleware');

router.put('/follow/:id',authMiddleware,followUser)
router.put('/unfollow/:id',authMiddleware,unfollowUser)
