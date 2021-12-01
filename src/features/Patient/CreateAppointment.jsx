import React from 'react';
import {
  Title, Wrapper,
} from '../../components';
import { AppointmentForm } from './components';
import { DICTIONARY } from '../../shared/dictionary';

export function CreateAppointment() {
  return (
    <Wrapper>
      <Title margin="10vh 0 40px">{DICTIONARY.pageName.makeAppointment}</Title>
      <AppointmentForm />
    </Wrapper>
  );
}
