import axios from "axios";

// http://localhost:8080/api/
// https://ai-image-generator-w1m2.onrender.com
const API = axios.create({
  baseURL: "https://ai-image-generator-w1m2.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);
