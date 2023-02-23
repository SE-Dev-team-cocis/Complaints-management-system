
import './App.css';
import './js/index.js';

import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
const StudentHome = lazy(() => import("./components/student/StudentHome"))
const StudentLogin = lazy(() => import("./components/student/StudentLogin"))
const AddComplaint = lazy(() => import("./components/student/AddComplaint"))
const Complaints = lazy(() => import("./components/student/Complaints"))
const StudentSignup = lazy(() => import("./components/student/StudentSignup"))
const LecturerHome = lazy(() => import("./components/lecturer/LecturerHome"))
const ARHome = lazy(() => import("./components/AR/ARHome"))
const HoDHome = lazy(() => import("./components/hod/HoDHome"))
//test route
const Sample = lazy(() => import("./components/student/Sample"))

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
       
          <Routes>
            <Route exact path="/" element={
            <Suspense fallback={<p className='text-center'>Loading....</p>} >
              <Login />
            </Suspense>
            } />

            <Route exact path="/student" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                 <StudentHome />
              </Suspense>
            } />

            {/* test route for first login*/}
            <Route exact path="/student/sample/:token" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                 <Sample />
              </Suspense>
            } />
            {/*End test route for first login*/}

            <Route exact path="/student/signup" element={
               <Suspense fallback={<p className='text-center'>Loading....</p>} >
                  <StudentSignup />
               </Suspense>
            } />

            {/* <Route exact path="/student/login/:username" element={<StudentLogin />} /> */}
            <Route exact path="/student/login" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                 <StudentLogin />
              </Suspense>
               } />

            <Route exact path="/student/complaints" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                  <Complaints />
              </Suspense>
            } />

            <Route exact path="/student/complaints/add" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                 <AddComplaint />
              </Suspense>
                 } />
            {/* <Route exact path="/student/settings" element={<Settings />} /> */}

            <Route exact path="/lecturer" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
               <LecturerHome />
              </Suspense>
              } />

            <Route exact path="/hod" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
                <HoDHome />
              </Suspense>
              } />

            <Route exact path="/ar" element={
              <Suspense fallback={<p className='text-center'>Loading....</p>} >
               <ARHome />
              </Suspense>
               } />
          </Routes>
       
      </QueryClientProvider>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
