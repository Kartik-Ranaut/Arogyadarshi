import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Heart from './Heart';
import Diabetes from './Diabetes';
import "./dashboard.css";

export default function Dashboard() {
  const location = useLocation();
  // console.log(location.state)
  const initialSelection = location.state?.selection || "heart";
  const [selection, setsel] = useState(initialSelection);

  useEffect(() => {
    if (location.state?.selection) {
      setsel(location.state.selection);
    }
  }, [location.state]);

  return (
    <div className='dashboard'>
      <div className='selection'>
        <div className='selbox'>
          <div className='selhead'>Multiple Disease Prediction System</div>
          <hr className='hr' />
          <button
            id="heart"
            className={`button ${selection === "heart" ? "color" : ""}`}
            onClick={() => setsel("heart")}
          >
            Heart Disease Prediction
          </button>
          <button
            id="diabetes"
            className={`button ${selection === "diabetes" ? "color" : ""}`}
            onClick={() => setsel("diabetes")}
          >
            Diabetes Prediction
          </button>
        </div>
      </div>

      <div className='datafield'>
        {selection === "heart" ? <Heart /> : <Diabetes />}
      </div>
    </div>
  );
}

