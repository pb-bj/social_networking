const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const TokenModel = require('../models/token.model')
const crypto = require('crypto') //for encryption
const sendEmail = require('../utils/sendEmail');
const tokenModel = require('../models/token.model');

exports.registerUserAccount = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, password } = req.body;
        // checking for exisiting user
        let user = await UserModel.findOne({ email });
            if(user) {
                return res.status(400).json({ message : "User already exits " });
            }
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)

        // creating new user
         let user = await UserModel.create({ firstName, lastName, gender, email, password : hashedPassword });
        if(!user) {
            return res.status(400).json({ error : 'Failed to register user!' });        
        }
        //generate token and send in mail
        let token = await TokenModel.create({
            user:user._id,
            token: crypto.randomBytes(10).toString('hex')
        })
        if(!token) {
            return res.status(400).json({ error : 'Something went wrong!' });        
        }

        // verify url

        const verify_url = `http://localhost:5000/auth/verifyuser/${token.token}`

        sendEmail({
            from: "noreply@something.com",
            to: email,
            subject:"Verification Email",
            text: "Click on the following link to verify your email. " + token.token,
            html: `<a href= '${verify_url}'><button>Verify your account.</button></a>`
        })            
        res.status(201).json({ message : 'User register successfully', user : user });
    } catch(error) {
        res.status(500).json({ message : error.message });
        console.log('Error in register', error);
    }
};

exports.loginUserAccount = async (req, res) => {
    try {
        const { email, password } = req.body;
        let checkUserEmail = await UserModel.findOne({ email })
        let checkUserPassword = await bcrypt.compare(password, password);
            if( !checkUserEmail && !checkUserPassword) {
                return res.status(400).json({ error : "Invalid credentials" });
            } 
            if(!checkUserEmail.isVerified){
                return res.status(400).json({error:"User not verified. Verify first."})
            }
            res.status(200).json({ message : 'User login successfull' });
   } catch(error) {
        res.status(500).json({ error : 'Failed to Login' });
    }
};

//verify
exports.verifyEmail = async (req,res) =>{
    //verifying token
    let token = await TokenModel.findOne({token: req.params.token})
    if(!token) {
        return res.status(400).json({ error : 'Invalid token or the token has been expired!' });        
    }
    //find user
    let user = await UserModel.findById(token.user)
    if(!user) {
        return res.status(400).json({ error : 'User associated with token not found!' });        
    }
    if(user.isVerified){
        return res.status(400).json({error:" User already registered. Login to continue"})
    }

    // verify user
    user.isVerified = true
    user = await  user.save()
    if(!user){
        return res.status(400).json({error: "Failed to verify. Try again later"})
    }
    res.send({message:"User verified successfully"})
    
}
