import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Progress from './Components/Progress';
import Dashboard from './Components/Dashboard';
import DoctorSection from './Components/DoctorSection';
import GetStarted from "./Components/GetStarted";
import HeartLearnMore from './Components/HeartLearnMore';
import DiabetesLearnMore from './Components/DiabetesLearnMore';
import ParameterInfo from './Components/ParameterInfo';
import Models from './Components/Models';

import { useEffect, useState } from 'react';
function App() {
  const [islogedin,setlogedin]=useState(false);
  const [refresh,setrefresh]=useState(false);
  const [user,setuserdata]=useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    age:"",
    disease:"",
    gender:"",
    family:[]
  });
  const test=async()=>{
    try{

      const responsee=await fetch("https://arogyadarshi-backend.onrender.com/api/test",{
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
    console.log("testing again");
    test();
  }
  ,[islogedin,refresh])
  return (
    <div className="App">
      <Header
        user={user}
        islogedin={islogedin}
        setlogedin={setlogedin}></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route
          path="/progress"
          element={
            <Progress
              user={user}
              islogedin={islogedin}
              setrefresh={setrefresh}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              user={user}
              islogedin={islogedin}
              setrefresh={setrefresh}
            />
          }
        />
        <Route path="/login" element={<Login setlogedin={setlogedin} />} />
        <Route path="/doctor" element={<DoctorSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn-more/heart" element={<HeartLearnMore />} />
        <Route path="/learn-more/diabetes" element={<DiabetesLearnMore />} />
        <Route
          path="/heart-parameters"
          element={<ParameterInfo disease="heart" />}
        />
        <Route
          path="/diabetes-parameters"
          element={<ParameterInfo disease="diabetes" />}
        />
        <Route path="/learn-more/models" element={<Models/>} />
        <Route path="*" element={<div>page does not exists</div>} />
      </Routes>
    </div>
  );
}

export default App;
