import React from "react";
import "./loader.css";

export default function Loader({ message = "Analyzing your health data..." }) {
  return (
    <div className="loader-section">
      <div className="spinner"></div>
      <p className="loader-text">{message}</p>
    </div>
  );
}
