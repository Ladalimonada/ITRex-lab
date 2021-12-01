import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import {
  Appointments, Patients, RestorePass, ForgotPass, SignIn, SignUp, CreateAppointment,
} from '../features';

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />

      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.FORGOT_PASS} element={<ForgotPass />} />
      <Route path={ROUTES.RESTORE_PASS} element={<RestorePass />} />
      <Route path={ROUTES.PATIENTS} element={<Patients />} />
      <Route path={ROUTES.APPOINTMENTS} element={<Appointments />} />
      <Route path={ROUTES.CREATE_APPOINTMENT} element={<CreateAppointment />} />
    </Routes>
  );
}
