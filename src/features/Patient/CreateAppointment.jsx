import React from 'react';
import {
  Title, Wrapper,
} from '../../components';
import { AppointmentForm } from './components';
import imgPatientAvatar from '../../img/patient-avatar.png';
import { DICTIONARY } from '../../shared/dictionary';

export function CreateAppointment() {
  return (
    <Wrapper avatar={imgPatientAvatar} name="Larry Prinston" position="Patient">
      <Title margin="10vh 0 40px">{DICTIONARY.pageName.makeAppointment}</Title>
      <AppointmentForm />
    </Wrapper>
  );
}
