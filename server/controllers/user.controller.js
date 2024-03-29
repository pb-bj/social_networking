const UserModel = require('../models/user.model');

//follow user

export const followUser = async (req,res)=>{
    
    const friendId = req.params.id

    const currentUserId =req.user._id

    if (currentUserId == friendId){
        return res.status(403).json({message:"cannot follow yourself"})
    }
    else{
        try{
            const followUser = await UserModel.findById(friendId)
            const followingUser = await UserModel.findById(currentUserId)

            if(!followUser.followers.include(currentUserId))
            {
                await followUser.updateOne({$push : {followers: currentUserId}})
                await followingUser.updateOne({$push: {following: friendId}})
                return res.status(200).json({message:"User followed"})
            }
            else{
                res.status(403).json({message:"User is already followed "})
            }
        } catch(error){
            res.status(500).json({ message : error.message });
            console.log(error);
        }
    }
}

// unfollow user

export const unfollowUser = async (req,res)=>{
    const friendId = req.params.id

    const {currentUserId} =req.user._id

    if (currentUserId == friendId){
        return res.status(403).json("Action forbidden")
    }
    else{
        try{
            const followUser = await UserModel.findById(friendId)
            const followingUser = await UserModel.findById(currentUserId)

            if(followUser.followers.include(currentUserId))
            {
                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$pull: {following: friendId}})
                return res.status(200).json({message:"User unfollowed"})
            }
            else{
                res.status(403).json({message:"User is not followed "})
            }
        } catch(error){
            res.status(500).json({ message : error.message });
            console.log(error);
        }
    }
}