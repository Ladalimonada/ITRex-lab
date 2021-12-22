import { instance } from './instance';
import { PATIENTSERVICE } from './apiUrlsConstant';

const doctors = (id:string) => instance.get(`${PATIENTSERVICE.doctors}${id}`);

const freeTime = (params:{}) => instance.get(
  PATIENTSERVICE.freeTime,
  { params },
);

const appointment = (body:{}) => instance.post(PATIENTSERVICE.appointment, body);

const patientAppointments = () => instance.get(PATIENTSERVICE.patientAppointments);

const patientResolutions = () => instance.get(PATIENTSERVICE.patientResolutions);

export const appointmentService = {
  doctors, freeTime, appointment, patientAppointments, patientResolutions,
};
