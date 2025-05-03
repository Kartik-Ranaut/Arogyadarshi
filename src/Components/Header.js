import './header.css'
import React from 'react'
import { Link, Links, useNavigate , NavLink} from 'react-router-dom'

export default function Header(props) {
    const navigate=useNavigate();
    const btnCall =()=>{
        navigate('/login');
    }
  return (
    <div className="header">
        <NavLink className="NavLink" to="/get-started">
          <p className="heading">👨‍⚕️ Arogyadarshi</p>
        </NavLink>
      <div className="Links  ">
        
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>

        <NavLink className="NavLink" to="/dashboard">
          Dashboard
        </NavLink>

        {/* <NavLink className="NavLink" to="/doctor">
          Doctor's Section
        </NavLink> */}
        <NavLink className="NavLink" to="/progress">
        My Reports
        </NavLink>
      </div>
      <div className='userbtn'>

     
      {

      props.islogedin ? <div>{props.user.name}</div>:<button className="loginbtn" onClick={btnCall}>
        Login/Signup
      </button>
      }
      </div>
    </div>
  );
}
