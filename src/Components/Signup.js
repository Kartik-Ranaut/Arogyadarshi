import React from 'react'
import './signup.css'
export default function Signup() {
  return (
    <div class="signup-container">
    <h2>Signup Form</h2>
    <form className="">
    <div className='signupForm'>
    <div class="input-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" required />
      </div>
      <div class="input-group">
        <label for="age">Age</label>
        <input type="number" id="age" required />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" required />
      </div>
      <div class="input-group">
        <label for="disease">Disease (if any)</label>
        <input type="text" id="disease" />
      </div>
    </div>
      
      <div class="input-group">
        <label for="address">Address</label>
        <textarea id="address" rows="2" required></textarea>
      </div>
      <button type="submit" class="submitbtn">Register</button>
    <p>Already have an account? <a href='/login'>Login</a></p>
    
    </form>
  </div>
  )
}
