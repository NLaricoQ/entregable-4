import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://users-crud-didq.onrender.com/",
});
