import "./parameterInfo.css";

export default function ParameterInfo({ disease }) {
  const heartParameters = [
    {
      name: "Age",
      description: "Age of the patient in years. Ideal: 30-60.",
    },
    {
      name: "Sex",
      description: "Gender of the patient. 1 = Male, 0 = Female.",
    },
    {
      name: "Chest Pain Type (cp)",
      description: `0: Typical angina, 1: Atypical angina, 2: Non-anginal pain, 3: Asymptomatic.`,
    },
    {
      name: "Resting Blood Pressure (trestbps)",
      description: "Measured in mm Hg. Ideal: 90-120.",
    },
    {
      name: "Cholesterol (chol)",
      description: "Serum cholesterol in mg/dl. Ideal: 125-200.",
    },
    {
      name: "Fasting Blood Sugar > 120 mg/dl (fbs)",
      description: "1 = True, 0 = False.",
    },
    {
      name: "Resting ECG (restecg)",
      description: `0: Normal, 1: ST-T wave abnormality, 2: Probable or definite left ventricular hypertrophy.`,
    },
    {
      name: "Max Heart Rate (thalach)",
      description: "Maximum achieved heart rate. Ideal: 100–170 bpm.",
    },
    {
      name: "Exercise-Induced Angina (exang)",
      description: "1 = Yes, 0 = No.",
    },
    {
      name: "ST Depression (oldpeak)",
      description:
        "ST depression induced by exercise relative to rest. Ideal: <2.",
    },
    {
      name: "Slope of ST segment (slope)",
      description: "0: Upsloping, 1: Flat, 2: Downsloping.",
    },
    {
      name: "Number of Major Vessels (ca)",
      description: "Number of major vessels (0–3) colored by fluoroscopy.",
    },
    {
      name: "Thalassemia (thal)",
      description: "1: Normal, 2: Fixed defect, 3: Reversible defect.",
    },
  ];
  const diabetesParameters = [
    {
      name: "Pregnancies",
      description: "Number of times pregnant. Ideal: 0–10.",
    },
    {
      name: "Glucose",
      description: "Plasma glucose concentration. Ideal: 90–130.",
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
      name: "Insulin",
      description: "2-Hour serum insulin (mu U/ml). Ideal: 16–166.",
    },
    {
      name: "BMI",
      description:
        "Body mass index (weight in kg/(height in m)^2). Ideal: 18.5–24.9.",
    },
    {
      name: "Diabetes Pedigree Function",
      description:
        "Function score for likelihood of diabetes based on family history. Ideal: <0.5.",
    },
    {
      name: "Age",
      description: "Age in years. Ideal: 21–60.",
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
            <strong>{param.name}:</strong> {param.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
