import axios from "axios";
const newRequest = axios.create({
  baseURL: "https://api-sushantsaud9804-gmailcom.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
