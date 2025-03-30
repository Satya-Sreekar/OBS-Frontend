import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../api/authApi"; // Import register function

// Define types
interface AuthUser {
  first_name: string;
  last_name: string;
  email: string;
}

interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: AuthState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
  loading: false,
  error: null,
};

// Async Thunk for Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      localStorage.setItem("user", JSON.stringify(response)); // Store full user object
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed. Please try again.");
    }
  }
);

// Async Thunk for Registration
export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials: { first_name: string; last_name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await register(credentials);
      localStorage.setItem("user", JSON.stringify(credentials)); // Store full user object
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Registration failed. Please try again.");
    }
  }
);

// Async Thunk for Logout
export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    localStorage.removeItem("user"); // Clear user data
    return null;
  } catch (error: any) {
    return rejectWithValue("Logout failed. Please try again.");
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
      })

      // Register Cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Logout Cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
