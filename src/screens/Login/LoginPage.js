import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyles } from "./LoginStyles";
import images from "../../assets/images";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Add your authentication logic here
    if (username === "admin" && password === "admin") {
      // Replace with actual authentication
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={LoginStyles.container}>
      <div style={LoginStyles.leftSection}>
        <div style={LoginStyles.logoContainer}>
          <img src={images.logo} style={LoginStyles.logo} alt="Logo" />
        </div>
        <div style={LoginStyles.companyInfo}>
          <h2 style={LoginStyles.missionTitle}>Our Mission</h2>
          <div style={LoginStyles.keyPoint}>
            <p style={LoginStyles.keyPointText}>
              To deliver innovative solutions that empower businesses and
              enhance productivity
            </p>
          </div>
          <h2 style={LoginStyles.missionTitle}>Our Vision</h2>
          <div style={LoginStyles.keyPoint}>
            <p style={LoginStyles.keyPointText}>
              To be the leading technology partner for businesses worldwide
            </p>
          </div>
          <div style={LoginStyles.keyPoint}>
            <p style={LoginStyles.keyPointText}>
              Excellence in every interaction
            </p>
          </div>
          <div style={LoginStyles.keyPoint}>
            <p style={LoginStyles.keyPointText}>
              Building lasting relationships through trust and innovation
            </p>
          </div>
        </div>
      </div>

      <div style={LoginStyles.rightSection}>
        <form style={LoginStyles.formContainer} onSubmit={handleSubmit}>
          <h1 style={LoginStyles.title}>Welcome Back</h1>
          <h1 style={LoginStyles.title1}>Your Time sheetportal</h1>

          <div style={LoginStyles.inputGroup}>
            <label style={LoginStyles.label}>Employee ID</label>
            <input
              style={LoginStyles.input}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              placeholder="Enter your username"
              type="text"
            />
          </div>

          <div style={LoginStyles.inputGroup}>
            <label style={LoginStyles.label}>Password</label>
            <input
              style={LoginStyles.input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter your password"
              type="password"
            />
          </div>

          {error && <div style={LoginStyles.errorText}>{error}</div>}

          <button type="submit" style={LoginStyles.button}>
            <span style={LoginStyles.buttonText}>Sign In</span>
          </button>

          <div style={LoginStyles.forgotPassword}>
            <span style={LoginStyles.forgotPasswordText}>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
