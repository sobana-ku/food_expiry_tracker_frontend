import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://food-expiry-tracker-backend-6jtk.onrender.com/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", response.data.user.email); 
        alert("Login successful!");
        navigate("/additem"); 
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">LOGIN</h2> 
      <form className="login-box" onSubmit={handleLogin}>
        <div className="user-icon"></div>

        <div className="input-group">
          <span className="input-icon">👤</span>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
