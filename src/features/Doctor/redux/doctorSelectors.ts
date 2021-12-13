import { RootState } from '../../../store/store';

export const doctor = ((state:RootState) =>  state.doctor);
export const doctorAppointment = ((state:RootState) => 
  doctor(state) &&
doctor(state).doctorappointments);
export const doctorAppointments = ((state:RootState) => 
  doctorAppointment(state) &&
doctorAppointment(state).appointments);