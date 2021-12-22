import moment from 'moment';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import Calendar from 'react-calendar';
import { Container, StyledRadiButtonGroup, StyledH4, Box } from './AppointmentForm.styled';
import { RadioButton, PatientInput, AppointmentContainer, SubmitButton } from '../index';
import { CustomSelect, ErrorMessageText } from '../../../../components';
import './Calendar.css';
import { DOCTORS_SPECIALIZATIONS, AVAILABLE_TIMESLOTS, CALENDAR_DAY_FORMAT } from '../../../../shared/constants';
import { newAppointmentValidation } from './appointmentValidation';
import { DICTIONARY } from '../../../../shared/dictionary';
import { fetchDoctors, fetchFreeTime } from '../../redux/patientSlice';
import { transformToISOString } from '../../../../shared/utils';
import { doctorsList, timeSlotsList } from '../../redux/patientSelectors';
import { AppointmentFormProps, InitialValuesType } from './AppointmentForm.types';

export const AppointmentForm = function ({ onSubmit }:AppointmentFormProps) {

  const dispatch = useAppDispatch();

  const optionsSpecialization = DOCTORS_SPECIALIZATIONS.map((doctor) => ({
    value: doctor.id,
    label: doctor.specialization_name,
  }));

  const doctors = useAppSelector(doctorsList);
  const doctorsOptions = doctors.map((doctor) => ({
    value: doctor.id,
    label: `${doctor.first_name} ${doctor.last_name}`,
  }));

  const timeSlots = useAppSelector(timeSlotsList);
  const availableTimeSlots = timeSlots.map((item) => moment(item).format('HH:mm:ss.SSS[Z]'));

  const initialValues:InitialValuesType  = {
    occupation: '',
    doctorsName: null,
    visitReason: '',
    note: '',
    date: new Date(),
    time: '',
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={({ visitReason, note, time, date, doctorsName }) => {
          const params = {
            date: transformToISOString(date).substring(0, 11).concat(time),
            reason: visitReason,
            note,
            doctorID: doctorsName.value,
          };
          onSubmit(params);
        }}
        validationSchema={newAppointmentValidation}
      >
        {({
          setFieldValue,
          isValid,
          dirty,
          values,
        }) => (
          <Form data-testid="form">
            <Box>
              <AppointmentContainer index="1" text={DICTIONARY.newAppointment.selectDoctor}>
                <StyledH4>{DICTIONARY.newAppointmentLabels.occupation}</StyledH4>
                <Field
                  as={CustomSelect}
                  name="occupation"
                  placeholder={DICTIONARY.newAppointmentPlaseholders.occupation}
                  options={optionsSpecialization}
                  value={values.occupation}
                  onChange={(value:{ value: string, label: string }) => {
                    setFieldValue('occupation', value);
                    setFieldValue('doctorsName', null);
                    dispatch(fetchDoctors(value.value));
                  }}
                />
                <ErrorMessage component={ErrorMessageText} name="occupation" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.doctorsName}</StyledH4>
                <Field
                  as={CustomSelect}
                  name="doctorsName"
                  placeholder={DICTIONARY.newAppointmentPlaseholders.doctorsName}
                  options={doctorsOptions}
                  value={values.doctorsName}
                  onChange={(value:{ value: string, label: string }) => {
                    setFieldValue('doctorsName', value);
                    dispatch(fetchFreeTime({
                      date: transformToISOString(values.date),
                      doctorID: value.value,
                    }));
                  }}
                />
                <ErrorMessage component={ErrorMessageText} name="doctorsName" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.visitReason}</StyledH4>
                <Field as={PatientInput} name="visitReason" placeholder={DICTIONARY.newAppointmentPlaseholders.visitReason} />
                <ErrorMessage component={ErrorMessageText} name="visitReason" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.note}</StyledH4>
                <Field as={PatientInput} name="note" placeholder={DICTIONARY.newAppointmentPlaseholders.note} />
                <ErrorMessage component={ErrorMessageText} name="note" />
              </AppointmentContainer>

              <AppointmentContainer index="2" text={DICTIONARY.newAppointment.selectDay}>
                <Field
                  as={Calendar}
                  name="date"
                  onChange={(value:Date)=>{
                    setFieldValue('date', value);
                    if (values.doctorsName){
                      dispatch(fetchFreeTime({ date: transformToISOString(value), doctorID: values.doctorsName.value }));
                    } 
                  }
                  }
                  value={values.date ? new Date(values.date) : new Date()}
                  minDate={new Date()}
                  formatShortWeekday={(locale:string, date:Date) => CALENDAR_DAY_FORMAT[date.getDay()]}
                />
              </AppointmentContainer>

              <AppointmentContainer index="3" text={DICTIONARY.newAppointment.selectTime}>
                <StyledRadiButtonGroup data-testid="radio-button">
                  {AVAILABLE_TIMESLOTS.map((item) => (
                    <Field
                      as={RadioButton}
                      name="time"
                      value={item.value}
                      label={item.label}
                      key={item.label}
                      isDisabled={values.doctorsName ? 
                        (!availableTimeSlots.find((timeItem) => timeItem === item.value)) : true}
                    />
                  ))}
                </StyledRadiButtonGroup>
                <ErrorMessage component={ErrorMessageText} name="time" />
                <SubmitButton isDisabled={!isValid || !dirty}>{DICTIONARY.newAppointment.submit}</SubmitButton>
              </AppointmentContainer>

            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
