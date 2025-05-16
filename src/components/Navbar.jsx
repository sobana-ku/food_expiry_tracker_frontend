
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../image/logo.jpg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

 
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Food Expiry Tracker Logo" />
        </Link>
        <h2 className="navbar-heading">FOOD EXPIRY TRACKER</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {isLoggedIn && (
          <>
            <Link to="/additem">Add Food Item</Link>
            <Link to="/inventory">Food Inventory</Link>
            <Link to="/about">About Us</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {!isLoggedIn && <Link to="/login">Login</Link>}

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
