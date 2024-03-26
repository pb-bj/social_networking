const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.registerUserAccount = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, password } = req.body;
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)


        // creating new user
         let user = await UserModel.create({ firstName, lastName, gender, email, password : hashedPassword });
        if(!user) {
            return res.status(400).json({ error : 'Failed to register user!' });        
        }            
        res.status(201).json({ message : 'User register successfully', user : user });
    } catch(error) {
        res.status(500).json({ error : 'Register Failed '});
    }
};

exports.loginUserAccount = async (req, res) => {
    try {
        const { email, password } = req.body;
        let checkUserEmail = await UserModel.findOne({ email })
        let checkUserPassword = await bcrypt.compare(password, password);
            if( !checkUserEmail && !checkUserPassword ) {
                return res.status(400).json({ error : "Invalid credentials" });
            } 
            res.status(200).json({ message : 'User login successfull' });
   } catch(error) {
        res.status(500).json({ error : 'Failed to Login' });
    }
};
