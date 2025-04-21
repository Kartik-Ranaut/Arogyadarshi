import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();
  const [data,setdata]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setdata((prev)=>({
      ...prev,
      [name]:value
    }))
    console.log(data)
  }
  const handleSubmit=async(e)=>{

    e.preventDefault();
    
    try{

    
    const response= await fetch("https://arogyadarshi-backend.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send converted data
    })
    const resdata = await response.json();
    alert(`login sucessful \n name:${resdata.user.name} \n email:${resdata.user.email}`);
    document.cookie =`token=${resdata.token}; path=/; max-age=3600;`;
    props.setlogedin(true);
    navigate('/');
  } catch(error){
        console.log("Error:", error);
        alert("Error making request. Please try again.");
      };
  }

  return (
      <div className="signup-container">
      <h2>Enter your details</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />
        </div>
        <div className="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required onChange={handleChange}/>
        </div>
        <button type="submit" className="submitbtn">Login</button>
        <p>Not registered? Click to <a href='/signup'>Signup </a></p>
      </form>
    </div>
  )
}
