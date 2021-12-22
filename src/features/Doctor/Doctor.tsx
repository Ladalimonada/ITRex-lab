import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { ButtonsGroup, Wrapper, Table } from '../../components';
import { StyledTitle, StyledBox } from './Doctor.styled';
import { PatientCard } from './components/';
import { DICTIONARY } from '../../shared/dictionary';
import { fetchAppointments, fetchResolutions } from './redux/doctorSlice';
import { doctorAppointments, doctorResolutions } from './redux/doctorSelectors';
import { DATE_FORMAT } from '../../shared/constants';
import { ROUTES } from '../../shared/constants';

export const DoctorsPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchResolutions());
  }, [dispatch]);

  const appointments = useAppSelector(doctorAppointments);
  const resolutions = useAppSelector(doctorResolutions);

  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.patients, path: ROUTES.PATIENTS },
          { title: DICTIONARY.pageName.resolutions, path: ROUTES.DOCTOR_RESOLUTIONS  }]}
      />
      {location.pathname === ROUTES.PATIENTS ? 
      <>
      <StyledTitle>{DICTIONARY.pageName.myPatients}</StyledTitle>
      <StyledBox>
        {appointments ? appointments.map(({
          patient: {
            first_name, last_name, photo,
          },
          reason, visit_date, status, id,
        }) => (
          <PatientCard
            id={id}
            avatar={photo}
            firstName={first_name}
            lastName={last_name}
            status={status}
            description={reason}
            time={moment(visit_date).format(DATE_FORMAT)}
            key={id}
            dataTestId="appointmentCard"
          />
        )) : null}
      </StyledBox>
      </>
        : 
        <>
      <StyledTitle>{DICTIONARY.pageName.resolutions}</StyledTitle>
      <StyledBox>
        {resolutions ? <Table type='doctor' data={resolutions} /> : null}
      </StyledBox>
      </>
    }
      
    </Wrapper>
  );
};
