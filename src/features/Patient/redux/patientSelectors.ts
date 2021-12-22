import { RootState } from '../../../store/store';

export const appointment = ((state:RootState) =>  state.appointment);

export const patientAppointment = ((state:RootState) =>  
  appointment(state) && appointment(state).patientAppointments && state.appointment.patientAppointments);

export const patientAppointments = ((state:RootState) =>  
  patientAppointment(state) && patientAppointment(state).appointments);

export const doctorsList = ((state:RootState) => appointment(state).doctors);

export const timeSlotsList = ((state:RootState) => appointment(state).freeTime);

export const patientResolution = ((state:RootState) => appointment(state) && appointment(state).patientResolutions);

export const patientResolutions = ((state: RootState) => patientResolution(state) && patientResolution(state).resolutions);


