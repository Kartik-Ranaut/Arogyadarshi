import React, { useState } from "react";
import "./getStarted.css";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleDiseaseSelection = (disease) => {
    setSelectedDisease(disease);
    nextStep();
  };

  const handleFinish = () => {
    if (selectedDisease) {
      navigate("/Arogyadarshi/dashboard", { state: { selection: selectedDisease } });
    }
  };

  return (
    <div className="wizard-container">
      <h1 className="wizard-title">Get Started with Arogyadarshi</h1>

      {step === 1 && (
        <div className="wizard-step">
          <h2>What is Arogyadarshi?</h2>
          <p>
            Arogyadarshi is an AI-based health prediction system for Heart
            Disease and Diabetes. It analyzes your health data and provides
            real-time risk assessment using ML models.
          </p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="wizard-step">
          <h2>Choose a Disease to Predict</h2>
          <div className="wizard-buttons">
            <button onClick={() => handleDiseaseSelection("heart")}>
              Heart Disease
            </button>
            <button onClick={() => handleDiseaseSelection("diabetes")}>
              Diabetes
            </button>
          </div>
          <button onClick={prevStep}>Back</button>
        </div>
      )}

      {step === 3 && (
        <div className="wizard-step">
          <h2>Input Your Health Details</h2>
          <p>
            Go to the selected form and input your vitals and health-related
            values. We ensure your privacy is respected.
          </p>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div className="wizard-step">
          <h2>View & Understand Results</h2>
          <p>
            Your result will be shown instantly, and future versions will
            explain what the prediction means using Generative AI.
          </p>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}
    </div>
  );
}
