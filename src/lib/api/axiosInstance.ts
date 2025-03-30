import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL:  "http://183.82.144.125:8000/",
//   baseURL:"http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
    "origin": "http://localhost:5173", // Adjust this to your frontend URL
  },
//   withCredentials: true, // Enable if using cookies for auth
});

// Request Interceptor (For adding Auth Tokens)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust storage method if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
      // Handle logout/redirection
    }
    return Promise.reject(error);
  }
);

export default api;
