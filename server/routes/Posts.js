import express from "express";
import { getallposts, createpost } from "../controllers/Posts.js"; // Include the .js extension

const router = express.Router();

router.get("/", getallposts);
router.post("/", createpost);

export default router;
