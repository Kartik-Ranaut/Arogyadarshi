import React, { useState } from 'react'
import "./heart.css"
export default function Heart() {
    const [formData, setFormData] = useState({
      age: "",
      sex: "",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: "",
    });
     const [result,setresult]=useState(null);
    // Handle input changes
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      console.log(formData);
    };

    const handleSubmit=async(event)=>{
      console.log("wait..")
      event.preventDefault(); 
    let newErrors ="";
    Object.keys(formData).forEach((key) => {
      if (formData[key]=="") {
        newErrors += `${key}, `;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      alert("Please add :"+newErrors+"");
      return;
    }
    const formattedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, isNaN(value) ? value : Number(value)])
    );
    try {
      const response = await fetch("https://disease-prediction-api-2tmy.onrender.com/heartdiseasepredict", {
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
  return (
    <div className='databoxheart'>
        <p className='hearthead'>Heart Disease Prediction User Interface Using ML</p>
      <form  onSubmit={handleSubmit}>
      <div className='inputbox'>
      
        {/* Age */}
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sex */}
        <div className="mb-3">
          <label className="form-label">Sex:</label>
          <select className="form-control" name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        {/* Chest Pain Type */}
        <div className="mb-3">
          <label className="form-label">Chest Pain Type (CP):</label>
          <select className="form-control" name="cp" value={formData.cp} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-anginal pain</option>
            <option value="3">Asymptomatic</option>
          </select>
        </div>

        {/* Resting Blood Pressure */}
        <div className="mb-3">
          <label className="form-label">Resting Blood Pressure (trestbps):</label>
          <input
            type="number"
            className="form-control"
            name="trestbps"
            value={formData.trestbps}
            onChange={handleChange}
            required
          />
        </div>

        {/* Cholesterol */}
        <div className="mb-3">
          <label className="form-label">Cholesterol (chol):</label>
          <input
            type="number"
            className="form-control"
            name="chol"
            value={formData.chol}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fasting Blood Sugar */}
        <div className="mb-3">
          <label className="form-label">Fasting Blood Sugar (fbs):</label>
          <select className="form-control" name="fbs" value={formData.fbs} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Greater than 120 mg/dl</option>
            <option value="0">Less than 120 mg/dl</option>
          </select>
        </div>

        {/* Resting ECG */}
        <div className="mb-3">
          <label className="form-label">Resting ECG (restecg):</label>
          <select className="form-control" name="restecg" value={formData.restecg} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Normal</option>
            <option value="1">ST-T wave abnormality</option>
            <option value="2">Left ventricular hypertrophy</option>
          </select>
        </div>

        {/* Maximum Heart Rate Achieved */}
        <div className="mb-3">
          <label className="form-label">Max Heart Rate (thalach):</label>
          <input
            type="number"
            className="form-control"
            name="thalach"
            value={formData.thalach}
            onChange={handleChange}
            required
          />
        </div>

        {/* Exercise Induced Angina */}
        <div className="mb-3">
          <label className="form-label">Exercise Induced Angina (exang):</label>
          <select className="form-control" name="exang" value={formData.exang} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* ST Depression (Oldpeak) */}
        <div className="mb-3">
          <label className="form-label">ST Depression (oldpeak):</label>
          <input
            type="number"
            className="form-control"
            name="oldpeak"
            value={formData.oldpeak}
            onChange={handleChange}
            required
          />
        </div>

        {/* Slope of Peak Exercise ST Segment */}
        <div className="mb-3">
          <label className="form-label">Slope:</label>
          <select className="form-control" name="slope" value={formData.slope} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Upsloping</option>
            <option value="1">Flat</option>
            <option value="2">Downsloping</option>
          </select>
        </div>

        {/* Number of Major Vessels Colored by Fluoroscopy (CA) */}
        <div className="mb-3">
          <label className="form-label">Number of Major Vessels (ca):</label>
          <input
            type="number"
            className="form-control"
            name="ca"
            value={formData.ca}
            onChange={handleChange}
            required
          />
        </div>

        {/* Thalassemia */}
        <div className="mb-3">
          <label className="form-label">Thalassemia (thal):</label>
          <select className="form-control" name="thal" value={formData.thal} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Normal</option>
            <option value="2">Fixed Defect</option>
            <option value="3">Reversible Defect</option>
          </select>
        </div>
        </div>

      <input type="submit"  onClick={handleSubmit} className="submitForm"></input>
      </form>
      
       
      <div>
      {
        (result)?
        <div>
        {result.prediction[0] ? <p>You may have Heart Disease.</p> : <p>You have a lower chance of having diabetes.</p>}
        <p>{`The probability of having Heart Disease is: ${result.probability}%`}</p>
        </div>:
        <div></div>
      }
      </div>
      
    </div>

  )
}
