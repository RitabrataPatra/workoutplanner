import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const connectionURI = process.env.MONGODB_URI
        await mongoose.connect(connectionURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        process.exit(1);
    }
}
export default connectDB