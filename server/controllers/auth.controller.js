const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUserAccount = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, password } = req.body;
        // checking for exisiting user
        let user = await UserModel.findOne({ email });
            if(user) {
                return res.status(400).json({ error : "Email address already in use" });
            }
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)

        // creating new user
        user = await UserModel.create({ firstName, lastName, gender, email, password : hashedPassword });
        if(!user) {
            return res.status(400).json({ error : 'Failed to register !' });        
        }
        
            res.status(201).json({ message : 'Registered successfull' })
    } catch(error) {
        res.status(500).json({ message : error.message });
        console.log('Error in register', error);
    }
};

exports.loginUserAccount = async (req, res) => {
    try {
        const { email, password } = req.body;
        let checkUser = await UserModel.findOne({ email })
        if(!checkUser) {
            return res.status(400).json({ error: "User not found" });
        }

        let validatePassword = await bcrypt.compare(password, checkUser.password);
            if( !validatePassword ) {
                return res.status(400).json({ error : "Invalid password" });
            } 

         const token = jwt.sign({ _id : checkUser._id }, process.env.JWT_SECRET, { expiresIn : '1h'} );
        res.cookie('token', token, { httpOnly : true, maxAge : 360000 });
        res.header('Authorization', token).json({ message : 'Login successful', token });
   } catch(error) {
        res.status(500).json({ message : 'Internal Server Error' });
        // console.log(error)
    }
};


