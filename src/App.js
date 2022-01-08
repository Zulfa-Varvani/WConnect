import "./App.css"
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenteeDash from "./components/Dashboard/MenteeDashboard";
import MentorDash from "./components/Dashboard/MentorDashboard";
import MhsDash from "./components/Dashboard/MhsDashboard";
import Home from "./components/Home";
import Login from './components/Login';
import Mentee from "./components/Register/Mentee";
import Mentor from "./components/Register/Mentor";
import Mhs from "./components/Register/Mhs";

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register-mentee" element={<Mentee/>}/>
        <Route path="/register-mentor" element={<Mentor/>}/>
        <Route path="/register-mhs" element={<Mhs/>}/>
        <Route path="/dashboard-mentee" element={<MenteeDash/>}/>
        <Route path="/dashboard-mentor" element={<MentorDash/>}/>
        <Route path="/dashboard-mhs" element={<MhsDash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
