/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ButtonsGroup, Wrapper } from '../../components';
import { StyledTitle, StyledContainer, StyledBox } from './Patient.styled';
import { AppontmentCard, AppointmentButton } from './components';
import { DICTIONARY } from '../../shared/dictionary';
import { fetchAppointments } from './redux/appointmentSlice';
import { ROUTES } from '../../shared/constants';
import { patientAppointments } from './redux/patientSelectors';

export const Appointments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const appointments = useAppSelector(patientAppointments);

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
      <StyledBox>
        {appointments ? appointments.map(({
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
      </StyledBox>
    </Wrapper>
  );
};
