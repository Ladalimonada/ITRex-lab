export const ROUTES = {
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  FORGOT_PASS: '/forgotpass',
  RESTORE_PASS: '/email-sent',
  PATIENTS: '/patients',
  APPOINTMENTS: '/appointments',
  CREATE_APPOINTMENT: '/appointments/create',
};

export const ROLES = ['Doctor', 'Patient'];

export const DOCTORS_SPECIALIZATIONS = [
  {
    id: 'c43fca01-3ea9-48f5-b5d8-4d7a4705e30f',
    specialization_name: 'Surgeon',
  },
  {
    id: '902240b7-514a-48c3-a67f-6acfb1d35030',
    specialization_name: 'Therapist',
  },
  {
    id: 'ff01ee4f-f005-48f2-830c-7dd456a1cc17',
    specialization_name: 'Ophthalmologist',
  },
  {
    id: 'fbebec6f-5ec0-4dcd-8e87-2a27af771f5a',
    specialization_name: 'Pediatrician',
  },
];

export const AVAILABLE_TIMESLOTS = [
  { label: '8:00 am', value: '05:00:00.000Z' },
  { label: '9:00 am', value: '06:00:00.000Z' },
  { label: '10:00 am', value: '07:00:00.000Z' },
  { label: '11:00 am', value: '08:00:00.000Z' },
  { label: '12:00 pm', value: '09:00:00.000Z' },
  { label: '1:00 pm', value: '10:00:00.000Z' },
  { label: '2:00 pm', value: '11:00:00.000Z' },
  { label: '3:00 pm', value: '12:00:00.000Z' },
  { label: '4:00 pm', value: '13:00:00.000Z' },
  { label: '5:00 pm', value: '14:00:00.000Z' },
  { label: '6:00 pm', value: '15:00:00.000Z' },
  { label: '7:00 pm', value: '16:00:00.000Z' },
  { label: '8:00 pm', value: '17:00:00.000Z' }];
