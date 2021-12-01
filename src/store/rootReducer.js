// import { combineReducers } from 'redux';
import authSlice from '../features/Authorization/authSlice';
import doctorSlice from '../features/Doctor/doctorSlice';
import appointmentSlice from '../features/Patient/appointmentSlice';

export const reducer = {
  auth: authSlice,
  appointment: appointmentSlice,
  doctor: doctorSlice,
};
