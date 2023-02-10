
import './App.css';
import './js/index.js';

import { Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';

import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';


const StudentHome = lazy(() => import("./components/student/StudentHome"))
const StudentLogin = lazy(() => import("./components/student/StudentLogin"))
const AddComplaint = lazy(() => import("./components/student/AddComplaint"))
const Complaints = lazy(() => import("./components/student/Complaints"))
const StudentSignup = lazy(() => import("./components/student/StudentSignup"))

const LecturerHome = lazy(() => import("./components/lecturer/LecturerHome"))
const ARHome = lazy(() => import("./components/AR/ARHome"))
const HoDHome = lazy(() => import("./components/hod/HoDHome"))

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      }
    }
  });
  return (
    <>
      {/* <Header /> */}
      <QueryClientProvider client={client}>
        <Suspense fallback={<p className='text-center'>Loading....</p>} >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/student" element={<StudentHome />} />
            <Route exact path="/student/signup" element={<StudentSignup />} />
            {/* <Route exact path="/student/login/:username" element={<StudentLogin />} /> */}
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
      <Footer />
    </>
  );
}

export default App;
