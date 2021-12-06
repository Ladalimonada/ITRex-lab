/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ButtonsGroup, Box, Wrapper } from '../../components';
import { StyledTitle, StyledContainer } from './Patient.styled';
import { AppontmentCard, AppointmentButton } from './components';
import { DICTIONARY } from '../../shared/dictionary';
import { getAppointments } from './appointmentSlice';
import { ROUTES } from '../../shared/constants';

export function Appointments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const patientAppointments = useSelector((state) => state
    .appointment.patientAppointments.appointments);

  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.appointments },
          { title: DICTIONARY.pageName.profile },
          { title: DICTIONARY.pageName.resolutions },
        ]}
      />
      <StyledContainer>
        <StyledTitle>{DICTIONARY.pageName.myAppointments}</StyledTitle>
        <div>
          <Link to={ROUTES.CREATE_APPOINTMENT}>
            <AppointmentButton>
              {DICTIONARY.newAppointment.createAppointment}
            </AppointmentButton>
          </Link>
        </div>
      </StyledContainer>
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
            time={moment(visit_date).format('ddd MMM D, YYYY h:mm A')}
            key={`${visit_date} ${last_name}`}
            dataTestId="appointmentCard"
          />
        )) : null}
      </Box>
    </Wrapper>
  );
}
