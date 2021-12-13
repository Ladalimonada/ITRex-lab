import { RootState } from '../../../store/store';

export const appointent = ((state:RootState) =>  state.appointment);
export const patientAppointment = ((state:RootState) =>  
  appointent(state) && 
appointent(state).patientAppointments && 
state.appointment.patientAppointments);
export const patientAppointments = ((state:RootState) =>  
  patientAppointment(state) && 
patientAppointment(state).appointments);
export const doctorsList = ((state:RootState) => appointent(state).doctors);
export const timeSlotsList = ((state:RootState) => appointent(state).freeTime);

