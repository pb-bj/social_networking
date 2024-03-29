const { getUserDetails, updateUserDetails, deleteUserDetails } = require('../controllers/user.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = require('express').Router();

router.get('/user-profile/:id', getUserDetails);
router.put('/user-profile/edit/:id', authMiddleware, updateUserDetails);
router.delete('/user-profile/delete/:id', authMiddleware, deleteUserDetails);

module.exports = router;