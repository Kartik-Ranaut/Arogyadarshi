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

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div>page does not exists</div>} />
      </Routes>
    </div>
  );
}

export default App;
