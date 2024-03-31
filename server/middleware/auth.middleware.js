const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Access Denied' });
    }

    try {
        const accessToken = token.split(' ')[1];
        const verified = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid' });
        console.error('Authentication error:', error.message);
    }
};
