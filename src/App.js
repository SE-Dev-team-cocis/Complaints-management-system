
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentHome from "./components/student/StudentHome"
import LecturerHome from "./components/lecturer/LecturerHome"
import ARHome from "./components/AR/ARHome"
import HoDHome from "./components/hod/HoDHome"

function App() {
  return (
  <>
  <Header />
   <Routes>
    {/* Base route */}
      <Route exact path="/" element={<Login />} />

    {/* Student routes */}
      <Route exact path="/student" element={<StudentHome />} />

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
