import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook,FaInstagram } from 'react-icons/fa';

const aboutBackgroundStyle = {
  position: 'relative',
  backgroundImage: 'url("https://media.istockphoto.com/id/464773040/photo/expiration-date-tuna-can-close-up.jpg?s=2048x2048&w=is&k=20&c=GvRu5kCQnDP16PU9M-S2HbNWDqZht__W0RZ0fXsInRc=")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '60px 20px',
  minHeight: '100vh',
};
const containerStyle = {
 position: 'relative',
  zIndex: 1,
  maxWidth: '850px',
  margin: 'auto',
  padding: '30px',
  borderRadius: '12px',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#000',
  backgroundColor: 'rgba(251, 250, 250, 0.3)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  boxShadow: '0 8px 16px rgba(4, 4, 4, 0.2)',
};

const titleStyle = {
  fontSize: '30px',
  marginBottom: '20px',
  color: 'brown',
  textAlign: 'center',
  
};

const descriptionStyle = {
  fontSize: '18px',
  marginBottom: '25px',
  textAlign: 'center',
  fontWeight: 'bold'
  
};

const sectionTitleStyle = {
  marginTop: '30px',
  color: 'darkblue',
  textAlign: 'center',
   fontSize: '18px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold'
};

const socialSectionStyle = {
  textAlign: 'center',
  marginTop: '40px',
};

const iconStyle = {
  fontSize: '30px',
  margin: '0 15px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

function About() {
  return (
    <div style={aboutBackgroundStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>🍽️ About Food Expiry Tracker</h2>
        <p style={descriptionStyle}>
          The <strong>Food Expiry Tracker</strong> helps you efficiently manage your kitchen inventory by tracking expiry dates,
          minimizing food waste, and ensuring food safety for your family.
        </p>

        <div>
          <h3 style={sectionTitleStyle}>✨ Key Features</h3>
          <ul style={listStyle}>
            <li>📝 Add food items with expiry details</li>
            <li>⏰ Get alerts for items nearing expiry</li>
            <li>✅ Intuitive, user-friendly interface</li>
            <li>📊 Dashboard with inventory summary</li>
          </ul>
        </div>

        <div>
  <h3 style={sectionTitleStyle}>🌱 Why Use This App?</h3>
  <p style={{ textAlign: 'center', fontSize: '18px',fontWeight: 'bold' }}>
    Every year, tons of food go to waste. Our tracker helps you reduce waste, save money, and stay organized.
  </p>
</div>

<div>
  <h3 style={sectionTitleStyle}>🚀 How It Works</h3>
  <p style={{ textAlign: 'center', fontSize: '18px',fontWeight: 'bold' }}>
    Simply add the food item, set the expiry date, and our system takes care of reminders and updates for you!
  </p>
</div>

      
        <div style={socialSectionStyle}>
          <h3 style={{ color: 'darkblue', marginBottom: '10px' }}>🔗 Follow Us on Social Media</h3>
          <a href="https://twitter.com/FoodExpiryTracker" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ ...iconStyle, color: '#1DA1F2' }} />
          </a>
          <a href="https://youtube.com/@FoodExpiryTracker" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ ...iconStyle, color: '#FF0000' }} />
          </a>
          <a href="https://facebook.com/FoodExpiryTracker" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ ...iconStyle, color: '#3b5998' }} />
          </a>
          <a href="https://instagram.com/FoodExpiryTracker" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ ...iconStyle, color: '#C13584' }} /> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
