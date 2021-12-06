/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  ButtonsGroup, Box, Wrapper,
} from '../../components';
import { StyledTitle } from './Doctor.styled';
import { PatientCard } from './components/PatientCard';
import { DICTIONARY } from '../../shared/dictionary';
import { getAppointments } from './doctorSlice';

export function Patients() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const appointments = useSelector((state) => state.doctor.doctorappointments.appointments);

  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.patients },
          { title: DICTIONARY.pageName.resolutions }]}
      />
      <StyledTitle>{DICTIONARY.pageName.myPatients}</StyledTitle>
      <Box>
        {appointments ? appointments.map(({
          patient: {
            first_name, last_name, photo,
          },
          reason, visit_date, status,
        }) => (
          <PatientCard
            avatar={photo}
            firstName={first_name}
            lastName={last_name}
            status={status}
            description={reason}
            time={moment(visit_date).format('ddd MMM D, YYYY h:mm A')}
            key={visit_date}
            dataTestId="appointmentCard"
          />
        )) : null}
      </Box>
    </Wrapper>
  );
}
