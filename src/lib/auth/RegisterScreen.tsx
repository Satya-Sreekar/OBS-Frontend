import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import "./RegisterScreen.css";
import { AppDispatch, RootState } from "../store/store";
import { registerUser } from "../store/slices/authSlice";

const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    setFormError(null);

    dispatch(
      registerUser({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
    )
      .unwrap()
      .then(() => navigate("/home")) // Redirect after successful registration
      .catch(() => {});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxChange = () => {
  
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <div className="register-header">
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">Join us to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="register-name-fields">
            <div className="register-input-group">
              <label>First Name</label>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="register-input-group">
              <label>Last Name</label>
              <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="register-input-group">
            <label>Email</label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="register-input-group">
            <label>Password</label>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="register-input-group">
            <label>Confirm Password</label>
            <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          {formError && <p className="register-error">{formError}</p>}
          {error && <p className="register-error">{error}</p>}

          <div className="register-checkbox">
            <Checkbox checked={agreeTerms} onCheckedChange={handleCheckboxChange} />
            <span>
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </span>
          </div>

          <Button type="submit" className="register-button" >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="register-footer">
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")} className="register-link">
                Sign in
              </span>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterScreen;
