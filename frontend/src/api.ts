import axios from "axios";

export const api = axios.create({
  // baseURL: "http://backend:8080/backend-api"
  baseURL: "http://localhost:8482/fbwa-backend-api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
