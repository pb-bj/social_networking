const router = require('express').Router();
const { registerUserAccount, loginUserAccount } = require('../controllers/auth.controller');
const { registerRules, validationFunction, loginRules } = require('../validation');

router.post('/register', registerRules, validationFunction, registerUserAccount);
router.post('/login', loginRules, validationFunction, loginUserAccount);

module.exports = router;