// for importing error packaging for error to the middleware
import "express-async-errors";
// importing the cookies validatin ... verfication
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
// for importing a package for handling time and status code of the out.
import morgan from "morgan";
// app.use(morgan("dev"));
// for mongoose
import mongoose from "mongoose";
// for global variables
import * as dotenv from "dotenv";
dotenv.config();
// for using cloudinary and accessing the values from .env
import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// for public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cookieParser());
// for importing the middleware for acceccing the authintication after successing
import { authinticatedUser } from "./middlwares/authMiddleware.js";

// routes for able to using controllers
import jobRoutes from "./routes/jobRouter.js";
import authRoutes from "./routes/authRouter.js";
import userRoutes from "./routes/userRoutes.js";
// to allow the cors, to allow request from other server
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   // You can also use a wildcard '*' to allow requests from any origin, but this is less secure.
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   // Other CORS headers to allow specific HTTP methods and headers
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   // Allow credentials (e.g., cookies) to be sent with the request
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   // Continue processing the request
//   next();
// });
// demo middleware for testing CORS
// app.get("/api/v1/test", (req, res) => {
//   res.json({ msg: "test route" });
// });
// the main middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", authinticatedUser, userRoutes);
app.use("/api/v1", authinticatedUser, jobRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});
// for middlewares
import errorHandlerMiddleware from "./middlwares/errorHandlerMiddleware.js";
// for importing validation packages
import { body, validationResult } from "express-validator";
// import the eile middleware for this error
import { validateTest } from "./middlwares/validateMiddleware.js";
// For testing validation
app.post("/api/v1/test", validateTest, (req, res) => {
  const { name } = req.body;
  res.status(200).json({ msg: `hello ${name}` });
});
// Not found middleware
app.use("*", (req, res) => {
  res.status(400).json({ msg: "This url not found" });
});
// Error Middle Ware
app.use(errorHandlerMiddleware);
// for connecting to mongooses and with local host
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
