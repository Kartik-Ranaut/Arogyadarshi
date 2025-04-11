import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Arogyadarshi</h1>
      <p className="home-subtitle">
        An intelliget ML health assistant for predicting Heart Disease and
        Diabetes
      </p>

      <div className="feature-cards">
        <div className="card">
          <h2>Heart Disease</h2>
          <p>Input your medical details and get an instant prediction</p>
          <button
            onClick={() =>
              navigate("/dashboard", { state: { selection: "heart" } })
            }
          >
            Predict
          </button>
        </div>

        <div className="card">
          <h2> Diabetes</h2>
          <p>Input your medical details and get an instant prediction</p>
          <button
            onClick={() =>
              navigate("/dashboard", { state: { selection: "diabetes" } })
            }
          >
            Predict
          </button>
        </div>
      </div>
    </div>
  );
}
