import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { ButtonsGroup, Box, Title } from '../components';
import { listofAppointments } from './appointments';
import imgPatientAvatar from '../img/patient-avatar.png';
import { AppontmentCard } from './components/AppointmentCard';

export function Appointments() {
  return (
    <Wrapper avatar={imgPatientAvatar} name="Larry Prinston" position="Patient">
      <ButtonsGroup
        buttons={[
          { title: 'Profile' },
          { title: 'Appointments' },
          { title: 'Resolutions' },
        ]}
      />
      <Title margin="0 0 42px">My Appointments</Title>
      <Box>
        {listofAppointments.map((item) => (
          <AppontmentCard
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
