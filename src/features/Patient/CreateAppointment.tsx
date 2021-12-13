import React from 'react';
import { useAppDispatch } from '../../shared/hooks';
import { Wrapper } from '../../components';
import { AppointmentForm } from './components';
import { StyledTitleAppointment } from './Patient.styled';
import { DICTIONARY } from '../../shared/dictionary';
import { createAppointment } from './redux/appointmentSlice';

export function CreateAppointment() {
  const dispatch = useAppDispatch();
  const handleCreateAppointment = async (params:{}) => {
    await dispatch(createAppointment(params));
  };
  return (
    <Wrapper>
      <StyledTitleAppointment>{DICTIONARY.pageName.makeAppointment}</StyledTitleAppointment>
      <AppointmentForm onSubmit={handleCreateAppointment} />
    </Wrapper>
  );
}
