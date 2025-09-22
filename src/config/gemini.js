import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';


const ai = new GoogleGenAI({ apiKey: "Your API key" });

async function runGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default runGemini;
