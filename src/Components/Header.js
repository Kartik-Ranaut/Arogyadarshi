
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate=useNavigate();
    const btnCall =()=>{
        navigate('/login');
    }
  return (
    <div>
    <h1>Welcome to Arogyadarshi</h1>
    
    <button onClick={btnCall}>Login/Signup</button>
    </div>
  )
}
