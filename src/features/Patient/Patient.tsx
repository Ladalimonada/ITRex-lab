import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { ButtonsGroup, Wrapper } from '../../components';
import { StyledTitle, StyledContainer, StyledBox } from './Patient.styled';
import { AppontmentCard, AppointmentButton } from './components';
import { DICTIONARY } from '../../shared/dictionary';
import { fetchAppointments, fetchResolutions } from './redux/patientSlice';
import { ROUTES } from '../../shared/constants';
import { patientAppointments, patientResolutions } from './redux/patientSelectors';
import { DATE_FORMAT } from '../../shared/constants';
import { PatientTable } from './components';

export const PatientsPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchResolutions());
  }, [dispatch]);

  const appointments = useAppSelector(patientAppointments);
  const resolutions = useAppSelector(patientResolutions);
  return (
    <Wrapper>
      <ButtonsGroup
        buttons={[
          { title: DICTIONARY.pageName.appointments, path:ROUTES.APPOINTMENTS },
          { title: DICTIONARY.pageName.resolutions, path:ROUTES.PATIENT_RESOLUTIONS },
        ]}
      />
      {location.pathname === ROUTES.APPOINTMENTS ? <>
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
          note, visit_date, id,
        }) => (
          <AppontmentCard
            avatar={photo}
            firstName={first_name}
            lastName={last_name}
            doctorsSpecialization={specialization_name}
            description={note}
            time={moment(visit_date).format(DATE_FORMAT)}
            key={id}
            dataTestId="appointmentCard"
          />
        )) : null}
      </StyledBox>
      </> : <>
      <StyledTitle>{DICTIONARY.pageName.resolutions}</StyledTitle>
      <PatientTable data={resolutions}></PatientTable>
      </>}
      
    </Wrapper>
  );
};
