import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LogoSmall from "@/assets/LogoSmall.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { clearError, loginUser } from "../store/slices/authSlice";

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user, loading, error } = useSelector((state: RootState) => state.auth);
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/home"); // Redirect to Home Screen
    }
  }, [user, navigate]);

  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    console.log("Checkbox clicked" + rememberMe);
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-8">
        <CardHeader style={{ alignItems: "center" }}>
          <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <img src={LogoSmall} alt="Logo" className="  h-16 mb-4" />
          </div>

          <CardTitle className="text-2xl font-semibold text-center">Welcome Back</CardTitle>
          <p className="text-gray-500 text-center">Please sign in to your account</p>
        </CardHeader>
        <CardContent>
         
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" style={{ padding: "8px" }}> Email</Label>
              <Input
                // type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label style={{ padding: "8px" }} htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">

                <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
                <span>Remember me </span>
              </label>

            </div>
            <a href="#" className="text-blue-500 inline-block hover:underline px-1 py-0.5">
              Forgot Password?
            </a>
            <Button disabled={loading} type="submit" className="w-full"> {loading ? "Logging in..." : "Sign In"}</Button>
          </form>
          {error && (
            <div style={{ color: "red" }}>
              {error} <Button
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "20%",
                marginLeft: "10px",
                marginTop: "20px",
              }}
              onClick={() => dispatch(clearError())}>X</Button>
            </div>
          )}

          <div className="mt-4 text-center text-sm">
            <p>
              Don't have an account?
              <span onClick={() => navigate("/register")} className="text-blue-500 cursor-pointer hover:underline"> Sign up</span>
            </p>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;