
import './App.css';
import './js/index.js';

import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentHome from "./components/student/StudentHome"
import LecturerHome from "./components/lecturer/LecturerHome"
import ARHome from "./components/AR/ARHome"
import HoDHome from "./components/hod/HoDHome"
import StudentSignup from './components/student/StudentSignup';
import Complaints from './components/student/Complaints';
import AddComplaint from './components/student/AddComplaint';
import StudentLogin from './components/student/StudentLogin';

function App() {
  return (
  <>
  {/* <Header /> */}
   <Routes>
    {/* Base route */}
      <Route exact path="/" element={<Login />} />

    {/* Student routes */}
      <Route exact path="/student" element={<StudentHome />} />
      <Route exact path="/student/signup" element={<StudentSignup />} />
      <Route exact path="/student/login" element={<StudentLogin />} />
      
      <Route exact path="/student/complaints" element={<Complaints />} />
      <Route exact path="/student/complaints/add" element={<AddComplaint />} />
      {/* <Route exact path="/student/settings" element={<Settings />} /> */}
      

    {/* Lecturer routes */}
      <Route exact path="/lecturer" element={<LecturerHome />} />

    {/* HOD routes */}
      <Route exact path="/hod" element={<HoDHome />} />

    {/* Academic registrar routes */}
      <Route exact path="/ar" element={<ARHome />} />

    </Routes>
  <Footer />
  </>
  );
}

export default App;
