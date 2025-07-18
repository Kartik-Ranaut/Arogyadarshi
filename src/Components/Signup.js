import React, { useState } from 'react'
import './signup.css'

import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [signupdata,setsignupdata]=useState({});
    const navigate =useNavigate();

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setsignupdata((prev)=>({
        ...prev,
        [name]:value
      }))
      console.log(signupdata)
    }

    const handleSubmit=async(e)=>{

      e.preventDefault();
      
      try{
  
      
      const response= await fetch("https://arogyadarshi-backend.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupdata), // Send converted data
      })
      const resdata = await response.json();
      if(resdata.success===true){
      alert("Please login now.")
      navigate("/login");
      }
      else{
        alert(resdata.message)
      }

    } catch(error){
          console.log("Error:", error);
          alert("Error making request. Please try again.");
        };
    }

    
  return (
    <div className="signup-container">
    <h2>Create Account</h2>
    <form className="" onSubmit={handleSubmit}>
    <div className='signupForm'>
    <div className="input-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name='name' required  onChange={handleChange}/>
      </div>
      <div className="input-group">
        <label for="age">Age</label>
        <input type="number" id="age" name='age' required  onChange={handleChange}/>
      </div>
      <div className="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" name='email' required  onChange={handleChange}/>
      </div>
      
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name='password' required  onChange={handleChange}/>
      </div>
      <div className="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name='phone' required  onChange={handleChange}/>
      </div>
      <div className="input-group">
        <label for="disease">Disease (if any)</label>
        <input type="text" id="disease" name='disease' required onChange={handleChange}/>
      </div>
    </div>
    <div className="input-group gender">
            <label for="gender" >Gender :</label>
            <select
              id="gender"
              name="gender"
              
              onChange={handleChange}
              required>
              <option value="">Select Member</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
      </div>
      
      <div className="input-group">
        <label for="address">Address</label>
        <textarea id="address" rows="2" required name='address' onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="submitbtn">Register</button>
    <p>Already have an account?<span onClick={() => navigate('/login')} style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline'}}> Login</span></p>
    
    </form>
  </div>
  )
}
