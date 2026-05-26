import axios from "axios";

const api = axios.create({
  baseURL: "http://https://blogapp-backend-yvdb.onrender.com",
  withCredentials: true,
});

export default api;