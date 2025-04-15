/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./home.css";
import HeartImg from "./Heart.jpg";
import DiabetesImg from "./Diabetes.jpeg"
import DataFlowTimeline from "./DataFlowTimeline";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Arogyadarshi</h1>
      <p className="home-subtitle">
        Your personal AI-driven assistant for early prediction and understanding
        of Heart Disease & Diabetes.
      </p>

      <div className="info-section">
        <div className="info-box">
          <img
            src={HeartImg}
            alt="Heart disease"
            className="info-image"
          />
          <h2>Heart Disease</h2>
          <p>
            Heart disease is a term covering a range of conditions affecting
            your heart and blood vessels. It remains a leading cause of death
            globally.
          </p>
          <ul>
            <li>
              <strong>Causes:</strong> High cholesterol, high blood pressure,
              smoking, diabetes, sedentary lifestyle.
            </li>
            <li>
              <strong>Symptoms:</strong> Chest pain, shortness of breath,
              fatigue, irregular heartbeat.
            </li>
            <li>
              <strong>Preventive Measures:</strong> Exercise regularly, eat
              heart-healthy foods, manage stress, monitor blood pressure.
            </li>
            <li>
              <strong>Reliefs:</strong> Lifestyle changes, medications,
              surgeries (if detected early).
            </li>
          </ul>
          <button
            className="predict-btn"
            onClick={() =>
              navigate("/dashboard", { state: { selection: "heart" } })
            }>
            Predict Heart Disease
          </button>
        </div>

        <div className="info-box">
          <img src={DiabetesImg} alt="Diabetes" className="info-image" />
          <h2>Diabetes</h2>
          <p>
            Diabetes is a chronic disease that affects how your body turns food
            into energy. If left unmanaged, it can lead to heart disease, kidney
            failure, and vision loss.
          </p>
          <ul>
            <li>
              <strong>Causes:</strong> Insulin resistance, genetics, obesity,
              poor diet.
            </li>
            <li>
              <strong>Symptoms:</strong> Excessive thirst, frequent urination,
              blurry vision, fatigue.
            </li>
            <li>
              <strong>Preventive Measures:</strong> Low sugar diet, regular
              exercise, avoid junk food.
            </li>
            <li>
              <strong>Reliefs:</strong> Insulin therapy, oral medication,
              lifestyle modifications.
            </li>
          </ul>
          <button
            className="predict-btn"
            onClick={() =>
              navigate("/dashboard", { state: { selection: "diabetes" } })
            }>
            Predict Diabetes
          </button>
        </div>
      </div>

      <div className="section">
        <h2> Models Behind the Magic</h2>
        <p>
          We use <strong>Support Vector Machines (SVM)</strong> for
          high-dimensional classification and{" "}
          <strong>Logistic Regression</strong> for binary outcome predictions.
          These models are trained on well-known datasets from Kaggle to ensure
          statistical relevance and robustness.
        </p>
        <p>
          Each model has been tuned for precision, using cross-validation and
          performance metrics like accuracy, precision, and recall.
        </p>
      </div>

      <div className="section">
        <h2>Why Use Machine Learning in Healthcare?</h2>
        <p>
          Early detection and risk evaluation.<br></br>
          Reduced diagnostic errors with data-driven decisions.<br></br>
          Automated pattern recognition from patient history.<br></br>
        </p>
      </div>

      <div className="section">
        <h2>✨ What Makes Arogyadarshi Unique?</h2>
        <p>
          Karte hai points add<br></br>
          Karte hai points add<br></br>
          Karte hai points add<br></br>
        </p>
      </div>

      <div className="section">
        <h2>Coming Soon: AI-Powered Interpretations</h2>
        <p>
          We’re integrating a <strong>Generative AI module</strong> that will
          analyze your input data and provide personalized explanations, health
          tips, and confidence-level-based interpretations.
        </p>
        <p>
          Think of it as your AI health buddy — telling you <strong>why</strong>{" "}
          you got that result, and what to do next!
        </p>
      </div>

      <div className="section">
        <h2>📌 Intended Use & Disclaimer</h2>
        <p>
          This system is meant for informational and educational purposes. It
          helps users understand potential health risks based on predictive
          models.
        </p>
        <p>
          <strong>This is not a replacement for a clinical diagnosis.</strong>{" "}
          Please consult healthcare professionals before making medical
          decisions.
        </p>
      </div>

      <footer className="home-footer">
        <p>
          Built with ❤️ by Team Arogyadarshi | Blending AI + Care for a
          healthier future 🌱
        </p>
      </footer>
      <button
        className="get-started-btn"
        onClick={() => navigate("/get-started")}>
        🚀 Get Started
      </button>
      <DataFlowTimeline/>
      <Loader></Loader>
    </div>
  );
}
