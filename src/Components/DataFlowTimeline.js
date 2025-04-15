import React from "react";
import "./dataFlowTimeline.css";

export default function DataFlowTimeline() {
  const steps = [
    { title: "📝 Input Data", desc: "User enters health-related details." },
    {
      title: "📤 Data Processing",
      desc: "Backend validates and cleans the data.",
    },
    { title: "🧠 ML Prediction", desc: "ML models predict risk of disease." },
    {
      title: "📈 Result Generation",
      desc: "Prediction score and insights generated.",
    },
    {
      title: "🤖 AI Interpretation",
      desc: "Generative AI interprets the result.",
    },
    {
      title: "📁 History Stored",
      desc: "Results are saved for future reference.",
    },
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">🔄 How Your Data Flows in Arogyadarshi</h2>
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div className="timeline-step" key={index}>
            <div className="timeline-icon">{step.title}</div>
            <p className="timeline-desc">{step.desc}</p>
            {index !== steps.length - 1 && (
              <div className="timeline-arrow">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
