/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./home.css";
import HeartImg from "./Heart.png";
import DiabetesImg from "./Diabetes.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Home() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const HeartLineRef = useRef(null);
  const diabetesLineRef = useRef(null);

  useEffect(() => {
    const diabetesLineCtx = diabetesLineRef.current.getContext("2d");

    new Chart(diabetesLineCtx, {
      type: "line",
      data: {
        labels: ["2015", "2017", "2019", "2021", "2023"],
        datasets: [
          {
            label: "Diabetes Cases (in millions)",
            data: [415, 425, 463, 537, 578], 
            fill: false,
            borderColor: "#36A2EB",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Global Diabetes Cases Over the Years",
          },
        },
      },
    });

    const lineCtx = HeartLineRef.current.getContext("2d");
    new Chart(lineCtx, {
      type: "line",
      data: {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
          {
            label: "Heart Disease Cases (in millions)",
            data: [580, 590, 600, 610, 620, 635, 640],
            fill: false,
            borderColor: "#FF6384",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Global Heart Disease Cases Over the Years",
          },
        },
      },
    });
  }, []);
  const handleSend = async() => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "User", text: userInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatMessages((prev) => 
      [...prev, 
      { sender: "Arogyadarshi AI", text: "Thinking..." },
    ]);
    setUserInput("");
    try{
      const response = await fetch("https://arogyadarshi-backend.onrender.com/api/geminiRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();
      const botMessage = { sender: "Arogyadarshi AI", text: data.data.candidates[0].content.parts[0].text };
      setChatMessages((prev) => prev.slice(0, -1));
      setChatMessages((prev) => [...prev, botMessage]);

    }catch(error){
      console.log(error);
    }
    
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Arogyadarshi</h1>
      <p className="home-subtitle">
        Your personal AI-driven assistant for early prediction and understanding
        of Heart Disease & Diabetes.
      </p>

      <div className="info-section">
        <div className="info-box">
          <img src={HeartImg} alt="Heart disease" className="info-image" />
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
          <div className="chart-wrapper">
            <canvas ref={HeartLineRef}></canvas>
          </div>
          <div className="button-group">
            <button
              className="predict-btn"
              onClick={() =>
                navigate("/dashboard", { state: { selection: "heart" } })
              }>
              Predict Heart Disease
            </button>
            <button
              className="learn-btn"
              onClick={() => navigate("/learn-more/heart")}>
              📖 Learn More
            </button>
          </div>
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
          <div className="chart-wrapper">
            <canvas ref={diabetesLineRef}></canvas>
          </div>
          <div className="button-group">
            <button
              className="predict-btn"
              onClick={() =>
                navigate("/dashboard", { state: { selection: "diabetes" } })
              }>
              Predict Diabetes
            </button>
            <button
              className="learn-btn"
              onClick={() => navigate("/learn-more/diabetes")}>
              📖 Learn More
            </button>
          </div>
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
        <button
          className="learn-btn"
          onClick={() => navigate("/learn-more/models")}>
          📖 Learn More
        </button>
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
          <strong>Multi-Disease Detection:</strong> Supports heart disease and
          diabetes — all in one platform.<br></br>
          <strong>Generative AI Insights:</strong> Personalized result
          interpretations with actionable health guidance.<br></br>
          <strong>Track Your Progress:</strong> View historical predictions and
          monitor health improvements over time. <br></br>
          <strong>Family Member Profiles:</strong> Easily switch and manage
          predictions for multiple people. <br></br>
          <strong>Interactive Health Quiz:</strong> Assess your lifestyle habits
          and get feedback to improve your health.
        </p>
      </div>

      <div className="section">
        <h2>New: AI-Powered Health Interpretations</h2>
        <p>
          Our <strong>Generative AI module</strong> is now live! It analyzes
          your input data and provides personalized explanations, actionable
          health tips, and confidence-level-based insights.
        </p>
        <p>
          It’s like having your own AI health companion — helping you understand{" "}
          <strong>why</strong> you got that result and guiding you on{" "}
          <strong>what to do next</strong>.
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
      <button className="chat-btn" onClick={() => setShowChat(!showChat)}>
        💬
      </button>

      <div className={`chat-window-container ${showChat ? "open" : ""}`}>
        <div className="chat-window">
          <h3>Chat with Arogyadarshi AI</h3>
          <div className="chat-messages">
            {chatMessages.map((msg, idx) => (
              <p key={idx}>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type your question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
        </div>
      </div>
    </div>
  );
}
