import React from "react";
import "./riskMeter.css";

export default function RiskMeter({ riskLevel }) {
  const getRiskLabel = () => {
    if (riskLevel < 30) return "Low Risk";
    if (riskLevel < 70) return "Moderate Risk";
    return "High Risk";
  };

  const getColor = () => {
    if (riskLevel < 30) return "#4caf50";
    if (riskLevel < 70) return "#ff9800";
    return "#f44336";
  };

  // Adjusting needle to rotate from -90deg to +90deg
  const rotation = (riskLevel / 100) * 180 - 90;

  return (
    <div className="risk-meter">
      <div className="gauge">
        <div
          className="needle"
          style={{ transform: `rotate(${rotation}deg)` }}></div>
        <div className="needle-tooltip">{riskLevel}%</div>
        <div className="gauge-center"></div>
      </div>
      <div className="risk-text" style={{ color: getColor() }}>
        {getRiskLabel()} 
      </div>
    </div>
  );
}
