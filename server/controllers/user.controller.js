const  UserModel  = require('../models/user.model')

exports.getUserDetails = async (req, res) => {
    try {
        const user = await UserModel.findById( req.params.id);
            if(!user) {
                return res.status(404).json({ error : 'User not Found' });
            } 
            res.status(200).json({ user });
            
    } catch(error) {
        res.status(500).json({ message : error.message })
        console.log(error)
    }
}

exports.updateUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;
        const { firstName, lastName, email } = req.body;

        // checking for authenticated user
        if( userId !== req.user._id ) {
            return res.status(403).json({ error : 'Unauthorized User' });
        }
        const updateUser = await UserModel.findByIdAndUpdate( userId, { firstName, lastName, email }, { new : true } );
            if(!updateUser) {
                return res.status(404).json({ error : 'User not Found' });
            } 

            if (req.file) {
                updateUser.image = req.file.path; 
                await post.save(); 
        }
            res.status(200).json({ message : 'User Profile Updated' });
    } catch(error) {
        res.status(500).json({ message : error.message })
        console.log(error)
    }
}


exports.deleteUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;

        if( userId !== req.user._id) {
            return res.status(403).json({ error : 'Unauthorize User' });
        }
        const deleteUser = await UserModel.findByIdAndDelete( req.params.id);
            if(!deleteUser) {
                return res.status(404).json({ error : 'User not Found' });
            } 
            res.status(200).json({ message : 'User Profile Deleted' });
            
    } catch(error) {
        res.status(500).json({ message : error.message })
        console.log(error)
    }
}