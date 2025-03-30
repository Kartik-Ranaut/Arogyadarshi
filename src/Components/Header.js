import './header.css'
import React from 'react'
import { Link, Links, useNavigate , NavLink} from 'react-router-dom'

export default function Header() {
    const navigate=useNavigate();
    const btnCall =()=>{
        navigate('/login');
    }
  return (
    <div className='header'>
    <p className='heading'>Welcome to Arogyadarshi</p>

    <div className="Links  ">
          <NavLink className="NavLink" to="/">Home</NavLink>
          
          <NavLink className="NavLink" to="/dashboard">Dashboard</NavLink>

          <NavLink className="NavLink" to="/doctor">Doctor's Section</NavLink>
    </div>

    
    <button className="loginbtn" onClick={btnCall}>Login/Signup</button>
    </div>
  )
}
