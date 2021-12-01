/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import {
  ButtonsGroup, Box, Title, Wrapper,
} from '../../components';
import { PatientCard } from './components/PatientCard';
import { DICTIONARY } from '../../shared/dictionary';
import { getAppointments } from './doctorSlice';

export function Patients() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const appointments = useSelector((state) => state.doctor.doctorappointments.appointments);
  console.log(appointments);
  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.patients },
          { title: DICTIONARY.pageName.resolutions }]}
      />
      <Title margin="0 0 42px">{DICTIONARY.pageName.myPatients}</Title>
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
            time={dayjs(visit_date).format('ddd MMM D, YYYY h:mm A')}
          />
        )) : null}
      </Box>
    </Wrapper>
  );
}
