const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];
        if(!token) {
            return res.status(401).json({ message : 'Access Denied' });
        }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
    } catch(error) {
        res.status(400).json({ error : 'Invalid Token' });
    }
};