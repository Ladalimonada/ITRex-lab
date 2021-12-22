import { RootState } from '../../../store/store';

export const doctor = ((state:RootState) =>  state.doctor);

export const doctorAppointment = ((state:RootState) => 
  doctor(state) && doctor(state).doctorAppointments);

export const doctorAppointments = ((state:RootState) => 
  doctorAppointment(state) && doctorAppointment(state).appointments);

export const doctorResolution = ((state:RootState) => doctor(state) && doctor(state).doctorResolutions);

export const doctorResolutions = ((state:RootState) => doctorResolution(state) && doctorResolution(state).resolutions);