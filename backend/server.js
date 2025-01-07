import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config( { path: "./.env" } );
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connectionURI = process.env.MONGODB_URI

mongoose.connect(connectionURI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})