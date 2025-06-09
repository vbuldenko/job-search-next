import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to database");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error connecting to MongoDB:", err.message);
    } else {
      console.log("Error connecting to MongoDB:", err);
    }
  }
};
export default connectToDB;
