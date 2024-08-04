import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getallposts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (e) {
    return next(createError(e.status || 500, e?.response?.data?.error?.message || e.message));
  }
};

export const createpost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    if (!name || !prompt || !photo) {
      throw createError(400, "Name, prompt, and photo are required");
    }

    const photoUrl = await cloudinary.uploader.upload(photo);
    const newpost = await Post.create({
      name,
      prompt,
      photo: photoUrl?.secure_url,
    });
    return res.status(201).json({ success: true, data: newpost });
  } catch (e) {
    return next(createError(e.status || 500, e?.response?.data?.error?.message || e.message));
  }
};