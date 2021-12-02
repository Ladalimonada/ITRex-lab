/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from 'react';
import * as dayjs from 'dayjs';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import {
  Container, StyledRadiButtonGroup, Box, StyledH4,
} from './AppointmentForm.styled';
import {
  RadioButton, AppointmentInput, TitleWithCircle, SubmitButton,
} from '../index';
import { CustomSelect, ErrorMessageText } from '../../../../components';
import './Calendar.css';
import { DOCTORS_SPECIALIZATIONS, AVAILABLE_TIMESLOTS } from '../../../../shared/constants';
import { newAppointmentValidation } from './appointmentValidation';
import { DICTIONARY } from '../../../../shared/dictionary';
import { createAppointment, getDoctors, getFreeTime } from '../../appointmentSlice';

export function AppointmentForm() {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [currentDoctor, setDoctor] = useState('');

  const dispatch = useDispatch();

  const optionsSpecialization = DOCTORS_SPECIALIZATIONS.map((doctor) => ({
    value: doctor.id,
    label: doctor.specialization_name,
  }));

  const doctors = useSelector((state) => state.appointment.doctors);
  const doctorsOptions = doctors.map((doctor) => ({
    value: doctor.id,
    label: `${doctor.first_name} ${doctor.last_name}`,
  }));

  const timeSlots = useSelector((state) => state.appointment.freeTime);

  const availableTimeSlots = timeSlots.map((item) => dayjs(item).format('h:00 a'));

  const onDateChange = (value) => {
    setCalendarValue(value);
    const isoStringDate = new Date(value.getTime()
    - (value.getTimezoneOffset() * 60000)).toISOString();
    dispatch(getFreeTime({ date: isoStringDate, doctorID: currentDoctor.value }));
  };

  const handleCreateAppointment = async ({
    time, visitReason, note,
  }) => {
    const params = {
      date: calendarValue.toISOString().substring(0, 11).concat(time),
      reason: visitReason,
      note,
      doctorID: currentDoctor.value,
    };
    await dispatch(createAppointment(params));
  };
  return (
    <Container>
      <Formik
        initialValues={{
          occupation: '',
          doctorsName: '',
          visitReason: '',
          note: '',
          date: calendarValue,
          time: '',
        }}
        onSubmit={handleCreateAppointment}
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
                  value={optionsSpecialization.label}
                  onChange={(e) => {
                    if (e.value !== optionsSpecialization.label) {
                      setDoctor('');
                    }
                    setFieldValue('occupation', e.value);
                    dispatch(getDoctors(e.value));
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
                    dispatch(getFreeTime({
                      date: new Date(calendarValue.getTime()
                      - (calendarValue.getTimezoneOffset() * 60000)).toISOString(),
                      doctorID: e.value,
                    }));
                  }}
                />
                <ErrorMessage component={ErrorMessageText} name="doctorsName" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.visitReason}</StyledH4>
                <Field as={AppointmentInput} name="visitReason" placeholder={DICTIONARY.newAppointmentPlaseholders.visitReason} />
                <ErrorMessage component={ErrorMessageText} name="visitReason" />
                <StyledH4>{DICTIONARY.newAppointmentLabels.note}</StyledH4>
                <Field as={AppointmentInput} name="note" placeholder={DICTIONARY.newAppointmentPlaseholders.note} />
                <ErrorMessage component={ErrorMessageText} name="note" />
              </Container>
              <Container>
                <TitleWithCircle number="2" text={DICTIONARY.newAppointment.selectDay} />
                <Calendar
                  name="date"
                  onChange={onDateChange}
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
                      value={item.value}
                      name="time"
                      label={item.label}
                      key={item.label}
                      isDisabled={useMemo(() => (currentDoctor ? !availableTimeSlots
                        .find((timeItem) => timeItem === item.label) : true),
                      [availableTimeSlots, item.label])}
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
