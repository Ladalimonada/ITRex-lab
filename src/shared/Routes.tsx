import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from './constants';
import { PatientsPage, DoctorsPage, RestorePass, ForgotPass, SignIn, SignUp, CreateAppointment, DoctorModalWindow } from '../features';
import { Page404 } from '../components';

export interface PrivateRouteProps {
  component: React.ComponentType
  path?: string
  roles: string[]
}

export const PrivateRoute = ({ component: RouteComponent, roles }: PrivateRouteProps) => {
  const userRole = localStorage.getItem('userRole');
  const userHasRequiredRole = !!roles.includes(userRole);
  if (userHasRequiredRole) {
    return <RouteComponent />;
  } return <Navigate to="/" />;
};

export function Routing() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
    
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<Page404 />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.FORGOT_PASS} element={<ForgotPass />} />
        <Route path={ROUTES.RESTORE_PASS} element={<RestorePass />} />
        <Route
          path={ROUTES.PATIENTS}
          element={<PrivateRoute roles={['Doctor', 'Admin']} component={DoctorsPage} />}
        />
        <Route
          path={ROUTES.DOCTOR_RESOLUTIONS}
          element={<PrivateRoute roles={['Doctor', 'Admin']} component={DoctorsPage} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<PrivateRoute roles={['Patient', 'Admin']} component={PatientsPage} />}
        />
        <Route
          path={ROUTES.PATIENT_RESOLUTIONS}
          element={<PrivateRoute roles={['Patient', 'Admin']} component={PatientsPage} />}
        />
        <Route
          path={ROUTES.CREATE_APPOINTMENT}
          element={<PrivateRoute roles={['Patient', 'Admin']} component={CreateAppointment} />}
        />

      </Routes>
      {
        state?.backgroundLocation && (
          <Routes>
        <Route
          path={ROUTES.CREATE_RESOLUTION}
          element={<PrivateRoute roles={['Doctor', 'Admin']} component={DoctorModalWindow} />}
        />
        <Route
          path={ROUTES.UPDATE_RESOLUTION}
          element={<PrivateRoute roles={['Doctor', 'Admin']} component={DoctorModalWindow} />}
        />
        <Route
          path={ROUTES.UPDATE_APPOINTMENT}
          element={<PrivateRoute roles={['Doctor', 'Admin']} component={DoctorModalWindow} />}
        />
      </Routes>
        )
      }
    </>
  );
}
