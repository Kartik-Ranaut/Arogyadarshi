import { useEffect, useRef } from "react";
import "./parameterInfo.css";
import Chart from "chart.js/auto";
import Quiz from "./Quiz";

export default function ParameterInfo({ disease }) {
  const heartBarRef = useRef(null);
  const diabetesBarRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (disease === "diabetes" && diabetesBarRef.current) {
      const ctx = diabetesBarRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Glucose", "Blood Pressure", "BMI", "Age"],
          datasets: [
            {
              label: "Ideal",
              data: [100, 80, 23, 35],
              backgroundColor: "#2196F3",
            },
            {
              label: "High Risk",
              data: [160, 110, 35, 65],
              backgroundColor: "#FF9800",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Diabetes: Ideal vs High-Risk Parameters",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [disease]);

  useEffect(() => {
    let chartInstance;

    if (disease === "heart" && heartBarRef.current) {
      const ctx = heartBarRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Resting BP", "Cholesterol", "Max HR", "Oldpeak"],
          datasets: [
            {
              label: "Ideal",
              data: [115, 180, 150, 1],
              backgroundColor: "#4CAF50",
            },
            {
              label: "High Risk",
              data: [145, 260, 100, 4],
              backgroundColor: "#F44336",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Heart: Ideal vs High-Risk Parameters",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [disease]);

  const heartParameters = [
    {
      name: "Age",
      description: "Age of the patient in years. Ideal range: 30–60.",
    },
    {
      name: "Gender",
      description: "Gender of the patient. Options: Male (1), Female (0).",
    },
    {
      name: "Chest Pain Type (cp)",
      description: `Type of chest pain experienced:<br />
        0 - Typical Angina: Predictable chest pain with exertion.<br />
        1 - Atypical Angina: Chest pain not related to exertion.<br />
        2 - Non-anginal Pain: Chest pain not related to the heart.<br />
        3 - Asymptomatic: No chest pain, silent ischemia.`,
    },

    {
      name: "Resting Blood Pressure (trestbps)",
      description:
        "Blood pressure measured in mm Hg while at rest. Ideal: 90–120.",
    },
    {
      name: "Cholesterol (chol)",
      description: "Serum cholesterol level in mg/dl. Ideal: 125–200.",
    },
    {
      name: "Fasting Blood Sugar (fbs)",
      description: `Indicates whether fasting blood sugar is > 120 mg/dl.<br />
    1 - True (Above 120)<br />
    0 - False (120 or below)`,
    },
    {
      name: "Resting ECG (restecg)",
      description: `Results from the resting electrocardiogram:<br />
     0 - Normal<br />
     1 - ST-T wave abnormality (possible ischemia)<br />
     2 - Left ventricular hypertrophy (thickened heart muscle)`,
    },
    {
      name: "Max Heart Rate Achieved (thalach)",
      description:
        "Maximum heart rate reached during exercise. Ideal: 100–170 bpm.",
    },
    {
      name: "Exercise Induced Angina (exang)",
      description: `Pain during exercise:<br />
     1 - Yes<br />
     0 - No`,
    },
    {
      name: "ST Depression (oldpeak)",
      description:
        "Depression of the ST segment compared to rest (in mm). Ideal: Less than 2.",
    },
    {
      name: "Slope of ST Segment (slope)",
      description: `Slope of the ST segment during peak exercise:<br />
     0 - Upsloping (better prognosis)<br />
     1 - Flat (possible heart issues)<br />
     2 - Downsloping (more serious ischemia)`,
    },
    {
      name: "Number of Major Vessels (ca)",
      description:
        "Number of major vessels (0–3) colored during fluoroscopy to check for blockages.",
    },
    {
      name: "Thalassemia (thal)",
      description: `A blood disorder classification:<br />
     1 - Normal<br />
     2 - Fixed defect (past myocardial infarction)<br />
     3 - Reversible defect (ischemia under stress)`,
    },
  ];
  const diabetesParameters = [
    {
      name: "Number of Pregnancies",
      description: "How many times the patient has been pregnant. Ideal: 0–10.",
    },
    {
      name: "Glucose Level",
      description: "Plasma glucose concentration after fasting. Ideal: 90–130.",
    },
    {
      name: "Blood Pressure",
      description: "Diastolic blood pressure (mm Hg). Ideal: 70–90.",
    },
    {
      name: "Skin Thickness",
      description: "Triceps skin fold thickness (mm). Ideal: 15–30.",
    },
    {
      name: "Insulin Level",
      description: "2-hour serum insulin level (mu U/ml). Ideal: 16–166.",
    },
    {
      name: "Body Mass Index (BMI)",
      description: "Weight-to-height ratio (kg/m²). Ideal: 18.5–24.9.",
    },
    {
      name: "Diabetes Pedigree Function",
      description:
        "Likelihood of diabetes based on family history. Ideal: Less than 0.5.",
    },
    {
      name: "Age",
      description: "Age of the patient in years. Ideal: 21–60.",
    },
  ];
  const data = disease === "heart" ? heartParameters : diabetesParameters;

  return (
    <div className="parameter-info-container">
      <h2>
        {disease === "heart"
          ? "Heart Disease Parameters"
          : "Diabetes Parameters"}
      </h2>
      <ul>
        {data.map((param) => (
          <li key={param.name}>
            <strong>{param.name}:</strong>{" "}
            <span dangerouslySetInnerHTML={{ __html: param.description }} />
          </li>
        ))}
      </ul>

      {disease === "heart" && (
        <div className="chart-wrapper">
          <canvas ref={heartBarRef}></canvas>
        </div>
      )}

      {disease === "diabetes" && (
        <div className="chart-wrapper">
          <canvas ref={diabetesBarRef}></canvas>
        </div>
      )}

      {disease === "heart" && <Quiz disease={"heart"} />}
      {disease === "diabetes" && <Quiz disease={"diabetes"} />}
    </div>
  );
}
