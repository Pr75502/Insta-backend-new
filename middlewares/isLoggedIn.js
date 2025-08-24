import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model("User");
import sendResponse from '../utilities/response.js';


const isLoggedIn = async (req, res, next) => {
    let token = req.headers.authorization;
  
    if (!token) {
      return sendResponse(res, false, 'You must be logged in', null,400);
    }
  
    token = token.split(" ")[1];

    if (!token) {
      return sendResponse(res, false, 'You must be logged in', null,400);
    }
  
    try {
      const foundUser = await User.findOne({ token });
  
      if (!foundUser) {
        return sendResponse(res, false, 'User not found', null,400);
      }
  
      req.user = foundUser;
      next();
    } catch (err) {
      console.log('Token is invalid', err);
      return sendResponse(res, false, 'Token is invalid', null, 400);
    }
  };

export default isLoggedIn;