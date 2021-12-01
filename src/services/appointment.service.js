import { instance } from './instance';

const doctors = (id) => instance.get(`/doctors/specialization/${id}`);

const freeTime = (params) => instance.get('/appointments/time/free',
  { params });

const appointment = (body) => instance.post('appointments', body);

const patientAppointments = () => instance.get('/appointments/patient/me/?offset=0&limit=10');

export const appointmentService = {
  doctors, freeTime, appointment, patientAppointments,
};
