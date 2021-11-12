import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import {
  Appointments, Patients, RestoredPass, RestorePass, SignIn, SignUp,
} from './features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SignUp />} />
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
