import './header.css'
import React,{useState,useEffect,useRef} from 'react'
import { Link, Links, useNavigate , NavLink} from 'react-router-dom'

export default function Header(props) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    alert('Logged out!');
    // Clear token or do logout logic
    document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"; props.setlogedin(false)
    setIsOpen(false);
  };
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
            <a href="/dashboard">Dashboard</a>
            <a href="/progress">My Reports</a>
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
