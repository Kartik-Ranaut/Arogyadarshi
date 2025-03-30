import React, { useState } from 'react'
import "./diabetes.css"
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
export default function Diabetes() {
  const [result,setresult]=useState(null);
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
  const submitForm=async(event)=>{
    event.preventDefault(); 
    let newErrors ="";
    Object.keys(data).forEach((key) => {
      if (data[key]=="") {
        newErrors += `${key}, `;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      alert("Please add :"+newErrors+"");
      return;
    }
    console.log("wait..")
    const formattedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, isNaN(value) ? value : Number(value)])
    );
    try {
      const response = await fetch("https://disease-prediction-api-2tmy.onrender.com/diabetespredict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData), // Send converted data
      });
      const data = await response.json();
      console.log("Prediction Result:", data);
      setresult(data);

    }
    catch (error) {
      console.error("Error:", error);
      alert("Error making request. Please try again.");
    }


  
  }
  const [data,setdata]=useState({
    "Pregnancies": "",
  "Glucose": "",
  "BloodPressure": "",
  "SkinThickness": "",
  "Insulin": "",
  "BMI": "",
  "DiabetesPedigreeFunction": "",
  "Age": ""
  })
  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className='datafielddiab' onSubmit={submitForm}>
    <p className='diabhead'>
    Diabetes Prediction User Interface Using ML
    </p>
    <div className='inputfield'>
    {Object.keys(data).map((key,index) => (
        <div key={key} className='box'>
          <label className='label'>{labels[index].label}:</label>
          <input
            className='input'
            type="text"
            name={key}
            value={data[key]}
            onChange={handleChange}
          />
        </div>
      ))}

    </div>
      <input type='submit' className='submitForm'></input>

      <div>
      {
        (result)?
        <div>
        {result.prediction[0] ? <p>You may have diabetes.</p> : <p>You have a lower chance of having diabetes.</p>}
        <p>{`The probability of having diabetes is: ${result.probability}%`}</p>
        </div>:
        <div></div>
      }
      </div>
      
    </form>


  )
}
