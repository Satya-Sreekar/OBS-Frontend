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
    const formData = new URLSearchParams();
    formData.append("username", data.email);  // OAuth2 expects 'username'
    formData.append("password", data.password);

    const response = await api.post<LoginResponse>("/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || "Login failed. Please try again.");
  }
};


//register 
interface RegisterResponse {
  id: number; // assuming your User model has an ID
  first_name: string;
  last_name: string;
  email: string;
}
  
  interface RegisterRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }

// Authentication API functions
export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await api.post<RegisterResponse>("/register", data);
    return response.data;
  } catch (error: any) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || "Registration failed. Please try again.");
  }
};