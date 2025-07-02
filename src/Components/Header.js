import './header.css'
import React,{useState} from 'react'
import { Link, Links, useNavigate , NavLink} from 'react-router-dom'

export default function Header(props) {

  const [isOpen, setIsOpen] = useState(false);
   
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


 

  const handleLogout = () => {
    alert('Logged out!');
    // Clear token or do logout logic
    localStorage.removeItem('token');
    // Optionally, you can also clear the cookie
    document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"; props.setlogedin(false)
    setIsOpen(false);
  };
    const navigate=useNavigate();
    const btnCall =()=>{
        navigate('/Arogyadarshi/login');
    }
  return (
    <div className="header">
        <NavLink className="NavLink" to="/Arogyadarshi/get-started">
          <p className="heading">👨‍⚕️ Arogyadarshi</p>
        </NavLink>
      <div className="Links  ">
        
        <NavLink className="NavLink" to="/Arogyadarshi/">
          Home
        </NavLink>

        <NavLink className="NavLink" to="/Arogyadarshi/dashboard">
          Dashboard
        </NavLink>

        {/* <NavLink className="NavLink" to="/doctor">
          Doctor's Section
        </NavLink> */}
        <NavLink className="NavLink" to="/Arogyadarshi/progress">
        My Reports
        </NavLink>
      </div>
      <div className='userbtn'>

     
      {
        props.islogedin ? <div>
       
       <button className="user-name-button" onClick={toggleDropdown}>
         {props.user.name} {isOpen ? '▲' : '▼'}
       </button>
 
       {isOpen && (
         <div className="dropdown-menu">
           <div className="user-info">
             <h4>{props.user.name}</h4>
             <p>{props.user.email}</p>
             <p>{props.user.phone}</p>
             <button className="manage-account-btn">Manage Account</button>
           </div>
           <hr />
           <div className="menu-links">
             <p onClick={()=>{navigate("/Arogyadarshi/dashboard")}}>Dashboard</p>
             <p onClick={()=>{navigate("/Arogyadarshi/progress")}}>My Reports</p>
           </div>
           <hr />
           <button className="logout-button" onClick={handleLogout}>
             Log out
           </button>
         </div>
       )}
       
       
       
       </div>:<button className="loginbtn" onClick={btnCall}>
        Login/Signup
      </button>
      }
      </div>
    </div>
  );
}
