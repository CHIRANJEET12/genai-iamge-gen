// controllers/generateImageController.js

import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const generatedImage = response.data.data[0].b64_json;
    res.status(200).json({ photo: generatedImage });
  } catch (e) {
    next(createError(e.status || 500, e?.response?.data?.error?.message || e.message));
  }
};
