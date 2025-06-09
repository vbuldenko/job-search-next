import express from "express";
import cors from "cors";
import authRouter from "./src/api/auth.route.js";
import connectToDB from "./src/db/index.js";
import { unknownEndpoint, errorMiddleware } from "./src/middleware/index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 10000;

const app = express();

// Middleware
app.use(cors());
// app.use(
//   cors({
//     origin: process.env.CLIENT_HOST,
//     credentials: true,
//   })
// );
app.use(express.json());

// MongoDB connection
connectToDB();

// Routes
app.use("/", authRouter);

//Middlewares
app.use(unknownEndpoint);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
