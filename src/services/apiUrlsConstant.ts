export const APPOINTMENTSERVICE = {
  doctors: '/doctors/specialization/',
  freeTime: '/appointments/time/free',
  appointment: 'appointments',
  patientAppointments: '/appointments/patient/me/?offset=0&limit=30',
};

export const AUTHSERVICE = {
  register: '/auth/registration',
  login: '/auth/login',
  profile: '/auth/profile',
};

export const DOCTORSERVICE = {
  patients: '/appointments/doctor/me/?offset=0&limit=10',
};
