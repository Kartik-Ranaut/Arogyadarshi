import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import DoctorSection from './Components/DoctorSection';
function App() {
  return (
    <div className="App">
     <Header></Header>

     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/doctor' element={<DoctorSection></DoctorSection>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='*' element={<div>page does not exists</div>}></Route>
     </Routes>
    </div>
  );
}

export default App;
