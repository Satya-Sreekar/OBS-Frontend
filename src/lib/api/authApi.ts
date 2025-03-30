import api from "./axiosInstance";

// Define types for API responses
interface LoginResponse {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

// Authentication API functions
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/doctor/signin/", data);
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed. Please try again.");
  }
};
