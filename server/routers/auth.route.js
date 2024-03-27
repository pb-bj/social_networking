const router = require('express').Router();
const { registerUserAccount, loginUserAccount, verifyEmail } = require('../controllers/auth.controller');

router.post('/register', registerUserAccount);
router.get('/verifyuser/:token',verifyEmail);
router.post('/login', loginUserAccount);

module.exports = router;