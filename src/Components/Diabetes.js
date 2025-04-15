import React, { useState } from "react";
import "./diabetes.css";
import Popup from "./Popup";
import Loader from "./Loader";
import DataFlowTimeline from "./DataFlowTimeline"; // newly added for data flow animation

export default function Diabetes(props) {
  const [result, setresult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const labels = [
    { key: "Pregnancies", label: "Number of Pregnancies" },
    { key: "Glucose", label: "Glucose Level" },
    { key: "BloodPressure", label: "Blood Pressure (mm Hg)" },
    { key: "SkinThickness", label: "Skin Thickness (mm)" },
    { key: "Insulin", label: "Insulin Level" },
    { key: "BMI", label: "Body Mass Index (BMI)" },
    { key: "DiabetesPedigreeFunction", label: "Diabetes Pedigree Function" },
    { key: "Age", label: "Age (years)" },
  ];

  const [data, setdata] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let newErrors = "";
    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        newErrors += `${key}, `;
      }
    });

    if (newErrors.length > 0) {
      alert("Please add: " + newErrors);
      return;
    }

    const formattedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        isNaN(value) ? value : Number(value),
      ])
    );

    try {
      setIsLoading(true);
      setShowTimeline(true);

      const response = await fetch(
        "https://disease-prediction-api-2tmy.onrender.com/diabetespredict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      const data = await response.json();
      setresult(data);
      setShowTimeline(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error making request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const [showPopup, setShowPopup] = useState(false);

  const addfamilymember = async (event) => {
    event.preventDefault();
    setShowPopup(!showPopup);
    
  };

  return (
    <div className="datafielddiab">

    {showPopup && <Popup setrefresh={props.setrefresh} setShowPopup={setShowPopup}></Popup>}
    <div className="family">
      <label for="relation">Testing for:</label>
      <button type="button" onClick={addfamilymember}> Add family member </button>
    </div>
    {!props.islogedin ? (
      <div></div>
    ) : (
      <select id="relation" name="relation">
        {props.user.family.map((relation, index) => (
          <option key={index} value={relation.id}>
            {relation.name}
          </option>
        ))}
      </select>
    )}
    <form onSubmit={submitForm}>
      <p className="diabhead">Diabetes Prediction User Interface Using ML</p>

      <div className="inputfield">
        {Object.keys(data).map((key, index) => (
          <div key={key} className="box">
            <label className="label">{labels[index].label}:</label>
            <input
              className="input"
              type="text"
              name={key}
              value={data[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <input type="submit" className="submitForm" value="Get Result" />

      {isLoading && <Loader />}

      {!isLoading && result && (
        <div className="result-display">
          <p>
            {result.prediction[0]
              ? "Your health data suggests a higher chance of diabetes. We recommend consulting a healthcare professional."
              : "Your results suggest a lower risk of diabetes. Keep maintaining a healthy lifestyle!"}
          </p>
          <p>{`The probability of you having diabetes is: ${result.probability}%`}</p>
        </div>
      )}

      {showTimeline && <DataFlowTimeline />}
    </form>
    </div>
  );
}
