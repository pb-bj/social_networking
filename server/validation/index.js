const { validationResult, check } = require('express-validator');

exports.registerRules = [
  check('fullname').trim().isLength({ min: 1 }).withMessage('Full name is required.').escape(),
  check('email').isEmail().withMessage('Please provide a valid email address.'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.').matches(/\d/).withMessage('Password must contain a number.'),
];

exports.loginRules = [
  check('email').isEmail().withMessage('Please provide a valid email address.'),
  check('password').exists().withMessage('Password is required.')
];

exports.validationFunction = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next()
    }
    else {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
};
