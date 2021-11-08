import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import {
  SignIn, SignUp, RestorePass, RestoredPass,
} from './Autorization';
import { Patients } from './DoctorView';
import { Appointments } from './PatientView/Appointments.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="restorepass" element={<RestorePass />} />
        <Route path="passwordrestored" element={<RestoredPass />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
