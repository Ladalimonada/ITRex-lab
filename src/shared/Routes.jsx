import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import {
  Appointments, Patients, RestorePass, ForgotPass, SignIn, SignUp, CreateAppointment,
} from '../features';

export const PrivateRoute = ({ component: RouteComponent, roles }) => {
  const userRole = localStorage.getItem('userRole');
  const userHasRequiredRole = !!roles.includes(userRole);
  if (userHasRequiredRole) {
    return <RouteComponent />;
  } return <Navigate to="/" />;
};

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.FORGOT_PASS} element={<ForgotPass />} />
      <Route path={ROUTES.RESTORE_PASS} element={<RestorePass />} />
      <Route
        path={ROUTES.PATIENTS}
        element={<PrivateRoute roles={['Doctor', 'Admin']} component={Patients} />}
      />
      <Route
        path={ROUTES.APPOINTMENTS}
        element={<PrivateRoute roles={['Patient', 'Admin']} component={Appointments} />}
      />
      <Route
        path={ROUTES.CREATE_APPOINTMENT}
        element={<PrivateRoute roles={['Patient', 'Admin']} component={CreateAppointment} />}
      />
    </Routes>
  );
}
