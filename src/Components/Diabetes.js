import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./diabetes.css";
import Popup from "./Popup";
import Loader from "./Loader";
import DataFlowTimeline from "./DataFlowTimeline"; 
import RiskMeter from "./RiskMeter";

export default function Diabetes(props) {
  const navigate=useNavigate();
  const [member,setmember]=useState();
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
    { key: "Age", label: "Age" },
  ];

  const [data, setdata] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: member ? member.age: "",
  });

  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if(!member){
      alert("Please select a family member");
      return;
    }
    data.Age=member ? member.age: 0;

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

      //store data in mongodb
      try{
        const response = await fetch(
          "https://arogyadarshi-backend.onrender.com/api/postdiabetesPrediction",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formattedData,
              prediction: data.prediction[0],
              percentage: data.probability,
              token:localStorage.getItem('token'),
              familyId: member._id
            }),
          }
        );
        const result = await response.json();
        console.log(result);
        if(result.success===true){
          alert("Data stored successfully");
          props.setrefresh((prev)=>!prev)
        }

      }catch(error){
        console.log("error in storing data");
      }
      
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
      {showPopup && (
        <Popup
          setrefresh={props.setrefresh}
          setShowPopup={setShowPopup}></Popup>
      )}
      <div className="family">
        <label for="relation">Testing for:</label>
        <button type="button" onClick={addfamilymember}>
          Add family member
        </button>
      </div>
      {!props.islogedin ? (
        <div>Please login first</div>
      ) : (
        <select
          id="relation"
          name="relation"
          onChange={(e) => {
            const selectedMember = props.user.family.find(
              (relation) => relation._id === e.target.value
            );
            setmember(selectedMember);
            console.log(selectedMember);
          }}>
          <option value="">-- Select Member --</option>
          {props.user.family.map((relation, index) => (
            <option key={index} value={relation._id}>
              {relation.name}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={submitForm}>
        <div className="info">
          <p className="diabhead">
            Diabetes Prediction User Interface Using ML
          </p>
          <span
            onClick={() => navigate("/diabetes-parameters")}
            className="info-icon">
            <i className="bi bi-info-circle"></i> Know your Parameters
          </span>
        </div>
        <div className="inputfield">
          {Object.keys(data).map((key, index) => (
            <div key={key} className="box">
              <label className="label">{labels[index].label}:</label>
              <input
                className="input"
                type="text"
                name={key}
                value={
                  labels[index].label === "Age"
                    ? member
                      ? member.age
                      : "Select Member"
                    : data[key]
                }
                onChange={handleChange}
                required
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
            <RiskMeter riskLevel={result.probability} />
          </div>
        )}

        {showTimeline && <DataFlowTimeline />}
      </form>
    </div>
  );
}
