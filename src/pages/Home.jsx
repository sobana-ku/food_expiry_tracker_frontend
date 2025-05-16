import React from 'react';
import { Link } from 'react-router-dom';
import homepage1 from "../image/homepage1.jpg";
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-header">
        <img src={homepage1} alt="Food Expiry Tracker" className="home-header-image" />
      </div>

      <div className="home-content">
        <h2 className="home-title">🍽️ Welcome to the Food Expiry Tracker</h2>

        <p className="home-description">
          Keep track of your food items and avoid waste by monitoring expiry dates efficiently.
        </p>

        <h3 className="home-quote">
          <i>"Food should not spoil and go to waste,<br />
          Do not keep it without checking its expiry!"</i>
        </h3>

        <div className="home-button-container">
         
          <Link to="/register">
            <button className="start-button">🚀 Start Tracking</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
