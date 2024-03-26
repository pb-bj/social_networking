const router = require('express').Router();
const { registerUserAccount, loginUserAccount } = require('../controllers/auth.controller');

router.post('/register', registerUserAccount);
router.post('/login', loginUserAccount);

module.exports = router;