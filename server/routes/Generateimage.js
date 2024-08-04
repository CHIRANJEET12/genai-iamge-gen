import express from "express";
import { generateImage } from "../controllers/Generateimage.js"; // Include the .js extension

const router = express.Router();

router.post("/", generateImage);

export default router;
