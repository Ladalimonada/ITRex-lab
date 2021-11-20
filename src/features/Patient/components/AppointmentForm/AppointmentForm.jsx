import React, { useMemo, useState } from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import Calendar from 'react-calendar';
import {
  Container, StyledRadiButtonGroup, Box, StyledH4,
} from './AppointmentForm.styled';
import {
  RadioButton, AppointmentInput, TitleWithCircle, SubmitButton,
} from '../index';
import {
  CustomSelect, ErrorMessageText,
} from '../../../../components';
import './Calendar.css';
import { DOCTORS, AVAILABLE_TIMESLOTS } from '../../../../shared/constants';
import { listofDoctors } from '../../doctors';
import { newAppointmentValidation } from './appointmentValidation';
import { DICTIONARY } from '../../../../shared/dictionary';

export function AppointmentForm() {
  const [calendarValue, onChange] = useState(new Date());
  const [doctorsSpecialization, setDoctorsSpecialization] = useState('');
  const [currentDoctor, setDoctor] = useState('');

  const optionsSpecialization = DOCTORS.map((doctor) => ({
    value: doctor,
    label: doctor,
  }));

  const doctorsOptions = useMemo(() => {
    const newArray = listofDoctors.filter(
      (doctor) => doctor.occupation === doctorsSpecialization.value,
    )
      .map((doctor) => ({
        label: `${doctor.firstName} ${doctor.lastName}`,
        value: `${doctor.firstName} ${doctor.lastName}`,
      })); return newArray;
  }, [doctorsSpecialization]);

  return (
    <Container>
      <Formik
        initialValues={{
          occupation: '',
          doctorsName: '',
          visitReason: '',
          note: '',
          date: { calendarValue },
          time: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={newAppointmentValidation}
      >
        {({
          handleSubmit, setFieldValue,
          isValid,
          dirty,
        }) => (
          <Form>
            <Box>
              <Container>
                <TitleWithCircle number="1" text={DICTIONARY.newAppointment.selectDoctor} />
                <StyledH4>{DICTIONARY.newAppointmentLabels.occupation}</StyledH4>
                <Field
                  as={CustomSelect}
                  name="occupation"
                  placeholder={DICTIONARY.newAppointmentPlaseholders.occupation}
                  options={optionsSpecialization}
                  value={doctorsSpecialization}
                  onChange={(e) => {
                    if (e.value !== doctorsSpecialization.value) {
                      setDoctor('');
                    }
                    setDoctorsSpecialization(e);
                    setFieldValue('occupation', e.value);
                  }}
                />
                <ErrorMessage component={ErrorMessageText} name="occupation" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.doctorsName}</StyledH4>
                <Field
                  as={CustomSelect}
                  name="doctorsName"
                  placeholder={DICTIONARY.newAppointmentPlaseholders.doctorsName}
                  options={doctorsOptions}
                  value={currentDoctor}
                  onChange={(e) => {
                    setDoctor(e);
                    setFieldValue('doctorsName', e.value);
                  }}
                />
                <ErrorMessage component={ErrorMessageText} name="doctorsName" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.visitReason}</StyledH4>
                <Field as={AppointmentInput} name="visitReason" placeholder={DICTIONARY.newAppointmentPlaseholders.visitReason} />
                <ErrorMessage component={ErrorMessageText} name="visitReason" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.note}</StyledH4>
                <Field as={AppointmentInput} placeholder={DICTIONARY.newAppointmentPlaseholders.note} name="note" />
              </Container>
              <Container>
                <TitleWithCircle number="2" text={DICTIONARY.newAppointment.selectDay} />
                <Calendar
                  onChange={onChange}
                  value={calendarValue}
                  minDate={new Date()}
                  formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                />
              </Container>
              <Container>
                <TitleWithCircle number="3" text={DICTIONARY.newAppointment.selectTime} />
                <StyledRadiButtonGroup>
                  {AVAILABLE_TIMESLOTS.map((item) => (
                    <Field
                      as={RadioButton}
                      value={item}
                      name="time"
                      label={item}
                      key={item}
                    />
                  ))}
                </StyledRadiButtonGroup>
                <ErrorMessage component={ErrorMessageText} name="time" />
                <SubmitButton onClick={handleSubmit} isDisabled={!isValid || !dirty} type="submit">{DICTIONARY.newAppointment.submit}</SubmitButton>
              </Container>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
