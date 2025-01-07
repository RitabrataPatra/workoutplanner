import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const UserDetails = mongoose.model("UserDetails", userSchema);

export default UserDetails