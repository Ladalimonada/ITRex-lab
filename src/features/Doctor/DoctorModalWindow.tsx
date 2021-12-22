import { ModalWindowResolutions, ModalWindowAppointments } from './components';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hooks';
import { ROUTES } from '../../shared/constants';
import { createResolution, updateResolution, updateAppointment } from './redux/doctorSlice';


export const DoctorModalWindow = () => {
  const location = useLocation();
  
  const dispatch = useAppDispatch();
  const handleCreateResolution = async (body: {}, id: string) => {
    await dispatch(createResolution({ ...body, appointmentID: id }));
  };
  const handleUpdateResolution = async (body: {}, id: string) => {
    await dispatch(updateResolution( { resolution:body, resolutionID:id }  ));
  };
  const handleUpdateAppointment = async (body: {}, id: string) => {
    await dispatch(updateAppointment( { status:body, appointmentID:id }  ));
  };

  const getModalWindow = (pathname:string) => {
    if (pathname.includes(ROUTES.CREATE_RESOLUTION)) {
      return <ModalWindowResolutions typeofModal={'createResolution'}  onSubmit={handleCreateResolution}></ModalWindowResolutions>;
    } if (pathname.includes(ROUTES.UPDATE_RESOLUTION)) {
      return <ModalWindowResolutions typeofModal={'updateResolution'}  onSubmit={handleUpdateResolution}></ModalWindowResolutions>;
    } if (pathname.includes(ROUTES.UPDATE_APPOINTMENT)) {
      return <ModalWindowAppointments onSubmit={handleUpdateAppointment}></ModalWindowAppointments>;
    }
  };

  return (
    getModalWindow(location.pathname)
  );
};