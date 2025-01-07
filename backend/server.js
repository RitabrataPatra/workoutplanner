import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config({ path: "./.env" }); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Connect to Database
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
