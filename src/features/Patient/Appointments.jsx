/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import {
  ButtonsGroup, Box, Title, Wrapper,
} from '../../components';
import { AppontmentCard, AppointmentButton } from './components';
import { DICTIONARY } from '../../shared/dictionary';
import { getAppointments } from './appointmentSlice';

export function Appointments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const patientAppointments = useSelector((state) => state
    .appointment.patientAppointments.appointments);
  console.log(patientAppointments);

  return (
    <Wrapper>
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
          <Link to="create">
            <AppointmentButton>
              {DICTIONARY.newAppointment.createAppointment}
            </AppointmentButton>
          </Link>
        </div>
      </div>
      <Box>
        {patientAppointments ? patientAppointments.map(({
          doctor: {
            first_name, last_name, specialization_name, photo,
          },
          note, visit_date,
        }) => (
          <AppontmentCard
            avatar={photo}
            firstName={first_name}
            lastName={last_name}
            doctorsSpecialization={specialization_name}
            description={note}
            time={dayjs(visit_date).format('ddd MMM D, YYYY h:mm A')}
          />
        )) : null}
      </Box>
    </Wrapper>
  );
}
