import React from 'react';
import imgAvatar from '../../img/avatar.png';
import {
  ButtonsGroup, Box, Title, Wrapper,
} from '../../components';
import { PatientCard } from './components/PatientCard';
import imgPatientAvatar from '../../img/patient-avatar.png';
import { listofPatients } from './patients';
import { DICTIONARY } from '../../shared/dictionary';

export function Patients() {
  return (
    <Wrapper avatar={imgAvatar} name="Miranda Nelson" position="Doctor">
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.patients },
          { title: DICTIONARY.pageName.resolutions }]}
      />
      <Title margin="0 0 42px">{DICTIONARY.pageName.myPatients}</Title>
      <Box>
        {listofPatients.map((item) => (
          <PatientCard
            avatar={imgPatientAvatar}
            firstName={item.firstName}
            lastName={item.lastName}
            status={item.status}
            description={item.description}
            time={item.time}
          />
        ))}
      </Box>
    </Wrapper>
  );
}
