import * as Yup from 'yup';

export const newAppointmentValidation = Yup.object().shape({
  occupation: Yup.string()
    .required('Please select the doctors specialization'),

  doctorsName: Yup.string()
    .required('Please select the doctor'),

  visitReason: Yup.string()
    .max(100, 'Must be shorter than 100 symbols')
    .required('Please indicate the reason of your visit'),

  note: Yup.string()
    .required('Please add the note to the appointment'),

  time: Yup.string()
    .required('Please choose the available time slot'),
});
