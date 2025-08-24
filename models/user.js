// import mongoose from "mongoose"; 
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    }
},
    { timestamps: true }
)


mongoose.model("User", userSchema)


// jwt => json web token 




