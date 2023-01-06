
import './App.css';
// import './js/index.js';

import { Routes, Route} from 'react-router-dom';

import { useState, createContext, lazy, Suspense } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
// import StudentHome from "./components/student/StudentHome"
import LecturerHome from "./components/lecturer/LecturerHome"
import ARHome from "./components/AR/ARHome"
import HoDHome from "./components/hod/HoDHome"
// import StudentSignup from './components/student/StudentSignup';
// import Complaints from './components/student/Complaints';
// import AddComplaint from './components/student/AddComplaint';
// import StudentLogin from './components/student/StudentLogin';

import {QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

const StudentHome = lazy(()=>import("./components/student/StudentHome"))
const Complaints = lazy(()=>import("./components/student/Complaints"))
const AddComplaint = lazy(()=>import("./components/student/AddComplaint"))
const StudentLogin = lazy(()=>import("./components/student/StudentLogin"))
// const StudentHome = lazy(()=>import("./components/student/StudentHome"))
const StudentSignup = lazy(()=>import("./components/student/StudentSignup"))
// const StudentHome = lazy(()=>import("./components/student/StudentHome"))

function App() {

  const [stepCount, setStepCount] = useState(0);
  
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    }
  }});
  return (
  <>
        <AppContext.Provider value={{stepCount, setStepCount}} >
          <QueryClientProvider client={client}>
            <Suspense fallback={<p className='text-center'></p>}>
              <Routes>
                  <Route exact path="/" element={<Login />} />
            
                  <Route exact path="/student" element={<StudentHome />} />
                  <Route exact path="/student/signup" element={<StudentSignup />} />
                  <Route exact path="/student/login" element={<StudentLogin />} />
                  
                  <Route exact path="/student/complaints" element={<Complaints />} />
                  <Route exact path="/student/complaints/add" element={<AddComplaint />} />
                  {/* <Route exact path="/student/settings" element={<Settings />} /> */}
            
  
                  <Route exact path="/lecturer" element={<LecturerHome />} />
              
                  <Route exact path="/hod" element={<HoDHome />} />

                  <Route exact path="/ar" element={<ARHome />} />

              </Routes>
            </Suspense>
  
          </QueryClientProvider>
        </AppContext.Provider>
        
  <Footer />
  </>
  );
}

export default App;
