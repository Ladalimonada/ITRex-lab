import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonsGroup, Box, Title, Wrapper,
} from '../../components';
import { listofAppointments } from './appointments';
import imgPatientAvatar from '../../img/patient-avatar.png';
import { AppontmentCard, AppointmentButton } from './components';
import { DICTIONARY } from '../../shared/dictionary';

export function Appointments() {
  return (
    <Wrapper avatar={imgPatientAvatar} name="Larry Prinston" position="Patient">
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.profile },
          { title: DICTIONARY.pageName.appointments },
          { title: DICTIONARY.pageName.resolutions },
        ]}
      />
      <div style={{
        display: 'flex', justifyContent: 'space-between',
      }}
      >
        <Title margin="0 0 42px">{DICTIONARY.pageName.myAppointments}</Title>
        <div>
          <Link to="/newappointment">
            <AppointmentButton>
              {DICTIONARY.newAppointment.createAppointment}
            </AppointmentButton>
          </Link>
        </div>
      </div>
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
