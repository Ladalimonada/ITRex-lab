import React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper } from '../../components';
import { AppointmentForm } from './components';
import { StyledTitleAppointment } from './Patient.styled';
import { DICTIONARY } from '../../shared/dictionary';
import { createAppointment } from './appointmentSlice';

export function CreateAppointment() {
  const dispatch = useDispatch();
  const handleCreateAppointment = async (params) => {
    await dispatch(createAppointment(params));
  };
  return (
    <Wrapper>
      <StyledTitleAppointment>{DICTIONARY.pageName.makeAppointment}</StyledTitleAppointment>
      <AppointmentForm onSubmit={handleCreateAppointment} />
    </Wrapper>
  );
}
