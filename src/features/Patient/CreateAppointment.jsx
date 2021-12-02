import React from 'react';
import { Wrapper } from '../../components';
import { AppointmentForm } from './components';
import { StyledTitleAppointment } from './Patient.styled';
import { DICTIONARY } from '../../shared/dictionary';

export function CreateAppointment() {
  return (
    <Wrapper>
      <StyledTitleAppointment>{DICTIONARY.pageName.makeAppointment}</StyledTitleAppointment>
      <AppointmentForm />
    </Wrapper>
  );
}
