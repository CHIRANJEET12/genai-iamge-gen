import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Postrouter from "./routes/Posts.js";
import generateImage from "./routes/Generateimage.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("Failed to connect to MongoDB");
      console.error(err);
    });
};

app.use("/api/post", Postrouter);
app.use("/api/generateimage", generateImage);

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const startServer = async () => {
  try {
    connectDB();
    app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
