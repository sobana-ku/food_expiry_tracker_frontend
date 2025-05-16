import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "lightgreen",
        border: "none",
        padding: "10px 20px",
        marginTop: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
