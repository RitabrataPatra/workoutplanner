import express from "express";
import UserDetails from "../schemas/UserDetails.js";

const router = express.Router();

//USER LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await UserDetails.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(200).json({ "message": "Login successful"  , success : true});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error while signing in user");
  }
});


//CREATE NEW USER
router.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await UserDetails.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" }); // JSON response for errors
      }
  
      const newUser = new UserDetails({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully", user: newUser }); // Valid JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" }); // Always send JSON
    }
  });
//GET ALL USERS
router.get("/" , async(req , res)=>{
    try {
        console.log("Entered try!");
        const users = await UserDetails.find({});
        if(!users){
            return res.status(404).json({ error: "No users found or issue with getting users" });
        }
        res.status(200).json({users , message: "Users fetched successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error while getting users" });
    }
})

export default router