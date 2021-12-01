import { instance } from './instance';

const patients = () => instance.get('/appointments/doctor/me/?offset=0&limit=10');

export const doctorService = {
  patients,
};
