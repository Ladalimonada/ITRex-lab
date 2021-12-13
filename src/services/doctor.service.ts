import { instance } from './instance';
import { DOCTORSERVICE } from './apiUrlsConstant';

const patients = () => instance.get(DOCTORSERVICE.patients);

export const doctorService = {
  patients,
};
