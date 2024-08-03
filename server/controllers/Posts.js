import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  export const getallposts = async(req,res,next)=>{
    try{
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts});
    }catch(e){
        return next(
            createError(
                error.status,
                error?.response?.data?.error.message || error.message
              )
            )
    }
  }