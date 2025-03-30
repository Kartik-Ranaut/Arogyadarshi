import React, { useState } from 'react'
import Heart from './Heart';
import Diabetes from './Diabetes';
import "./dashboard.css";
export default function Dashboard() {
  const [selection,setsel]=useState("heart");

  return (
    <div className='dashboard'>
      
      <div className='selection'>
      <div className='selbox'>
      <div className='selhead'>Multiple Disease Prediction System</div>
      <hr className='hr'></hr>
      <button id="heart" className={`button ${selection=="heart"?"color":""}`} onClick={()=>{setsel("heart")}}>Heart Disease Prediction</button>
      <button id="diabetes" className={`button ${selection=="diabetes"?"color":""}`} onClick={()=>{setsel("diabetes")}}>Diabetes Prediction </button>
      </div>
      
      </div>
      <div className='datafield'>
      {
      (selection=="heart")? <Heart></Heart> :<Diabetes></Diabetes>
      }
      </div>
      
    </div>
  )
}
