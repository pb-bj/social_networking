const UserModel = require('../models/user.model')

exports.getUserDetails = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not Found' });
        }
        res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

exports.updateUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;
        const { firstName, lastName, email, address, work } = req.body;

        // checking for authenticated user
        if (userId !== req.user._id) {
            return res.status(403).json({ error: 'Unauthorized User' });
        }
        const updateUser = await UserModel.findByIdAndUpdate(userId, { firstName, lastName, email, address, work }, { new: true });
        if (!updateUser) {
            return res.status(404).json({ error: 'User not Found' });
        }

        if (req.file) {
            updateUser.image = req.file.path;
            await updateUser.save();
        }
        res.status(200).json({ message: 'User Profile Updated' });
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}


exports.deleteUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;

        if (userId !== req.user._id) {
            return res.status(403).json({ error: 'Unauthorize User' });
        }
        const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(404).json({ error: 'User not Found' });
        }
        res.status(200).json({ message: 'User Profile Deleted' });

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

//follow user

exports.followUser = async (req, res) => {

    const friendId = req.params.id

    const currentUserId = req.user._id

    if (currentUserId == friendId) {
        return res.status(403).json({ message: "cannot follow yourself" })
    }
    else {
        try {
            const followUser = await UserModel.findById(friendId)
            const followingUser = await UserModel.findById(currentUserId)

            if (!followUser.followers.include(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } })
                await followingUser.updateOne({ $push: { following: friendId } })
                return res.status(200).json({ message: "User followed" })
            }
            else {
                res.status(403).json({ message: "User is already followed " })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
            console.log(error);
        }
    }
}

// unfollow user

exports.unfollowUser = async (req, res) => {
    const friendId = req.params.id

    const { currentUserId } = req.user._id

    if (currentUserId == friendId) {
        return res.status(403).json("Action forbidden")
    }
    else {
        try {
            const followUser = await UserModel.findById(friendId)
            const followingUser = await UserModel.findById(currentUserId)

            if (followUser.followers.include(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } })
                await followingUser.updateOne({ $pull: { following: friendId } })
                return res.status(200).json({ message: "User unfollowed" })
            }
            else {
                res.status(403).json({ message: "User is not followed " })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
            console.log(error);
        }
    }
}