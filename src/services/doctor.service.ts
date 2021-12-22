import { instance } from './instance';
import { DOCTORSERVICE } from './apiUrlsConstant';

const patients = () => instance.get(DOCTORSERVICE.patients);
const deleteAppointment = ( id:string ) => instance.delete(`${DOCTORSERVICE.deleteAppointment}${id}`);
const updateResolution = (body:{}, id:string) => instance.patch(`${DOCTORSERVICE.updateResolution}${id}`, body);
const createResolution = (body:{}) => instance.post(DOCTORSERVICE.createResolution, body);
const resolutions = () => instance.get(DOCTORSERVICE.resolutions);
const deleteResolution = ( id:string ) => instance.delete(`${DOCTORSERVICE.deleteResolution}${id}`);
const updateAppointment = (body:{}, id:string) => instance.patch(`${DOCTORSERVICE.updateAppointment}${id}`, body);

export const doctorService = {
  patients, deleteAppointment, updateResolution, createResolution, resolutions, deleteResolution, updateAppointment,
};
