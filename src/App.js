import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import DoctorSection from './Components/DoctorSection';
import GetStarted from "./Components/GetStarted";
import { useEffect, useState } from 'react';
function App() {
  const [islogedin,setlogedin]=useState(false);
  const [user,setuserdata]=useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    age:"",
    disease:""
  });
  const test=async()=>{
    try{

      const responsee=await fetch("http://localhost:3000/api/test",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"token":document.cookie.substring(6) }),
      });
      let res=await responsee.json();
   
      
      if(res.success==true){
        setlogedin(true);
        setuserdata(res.data);
        console.log(res.data)
      }
      } catch(error){
        console.log(error)
        console.log("the user is not logedin");
        setlogedin(false);
      }
  }
  useEffect(()=>{
    test()
  }
  ,[islogedin])
  return (
    <div className="App">
      <Header user={user} islogedin={islogedin} setlogedin={setlogedin}></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard user={user} islogedin={islogedin} />} />
        <Route path="/login" element={<Login setlogedin={setlogedin}/>} />
        <Route path="/doctor" element={<DoctorSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div>page does not exists</div>} />
      </Routes>
    </div>
  );
}

export default App;
