/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import moment from 'moment';
import {
  ButtonsGroup, Wrapper,
} from '../../components';
import { StyledTitle, StyledBox } from './Doctor.styled';
import { PatientCard } from './components/PatientCard';
import { DICTIONARY } from '../../shared/dictionary';
import { getAppointments } from './redux/doctorSlice';
import { doctorAppointments } from './redux/doctorSelectors';

export const Patients = function () {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const appointments = useAppSelector(doctorAppointments);

  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.patients },
          { title: DICTIONARY.pageName.resolutions }]}
      />
      <StyledTitle>{DICTIONARY.pageName.myPatients}</StyledTitle>
      <StyledBox>
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
      </StyledBox>
    </Wrapper>
  );
};
