import express from 'express';
import mongoose from 'mongoose';
const userRouter = express.Router();
const User = mongoose.model('User');
import isLoggedIn from '../middlewares/isLoggedIn.js';
import sendResponse from '../utilities/response.js';

// Get user profile
userRouter.get('/profile/:userId', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select('-password -token');
        if (!user) {
            return sendResponse(res, false, 'User not found', null, 404);
        }
        return sendResponse(res, true, 'Profile retrieved successfully', user);
    } catch (err) {
        return sendResponse(res, false, 'Server error', null, 500);
    }
});

// Update user profile
userRouter.put('/profile', isLoggedIn, async (req, res) => {
    try {
        const { name } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { $set: { name } },
            { new: true }
        ).select('-password -token');
        
        return sendResponse(res, true, 'Profile updated successfully', updatedUser);
    } catch (err) {
        return sendResponse(res, false, 'Server error', null, 500);
    }
});

export default userRouter;