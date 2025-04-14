import React from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
      <div class="signup-container">
      <h2>Create Account</h2>
      <form className="loginForm">
        <div class="input-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" class="submitbtn">Login</button>
        <p>not registered? click to <a href='/signup'>signup </a></p>
      </form>
    </div>
  )
}
