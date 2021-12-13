import authSlice from '../features/Authorization/redux/authSlice';
import doctorSlice from '../features/Doctor/redux/doctorSlice';
import appointmentSlice from '../features/Patient/redux/appointmentSlice';

export const reducer = {
  auth: authSlice,
  appointment: appointmentSlice,
  doctor: doctorSlice,
};
