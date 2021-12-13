import { instance } from './instance';
import { APPOINTMENTSERVICE } from './apiUrlsConstant';

const doctors = (id:string) => instance.get(`${APPOINTMENTSERVICE.doctors}${id}`);

const freeTime = (params:{}) => instance.get(
  APPOINTMENTSERVICE.freeTime,
  { params },
);

const appointment = (body:{}) => instance.post(APPOINTMENTSERVICE.appointment, body);

const patientAppointments = () => instance.get(APPOINTMENTSERVICE.patientAppointments);

export const appointmentService = {
  doctors, freeTime, appointment, patientAppointments,
};
