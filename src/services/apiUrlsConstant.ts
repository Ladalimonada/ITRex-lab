export const PATIENTSERVICE = {
  doctors: '/doctors/specialization/',
  freeTime: '/appointments/time/free',
  appointment: 'appointments',
  patientAppointments: '/appointments/patient/me/?offset=0&limit=200',
  patientResolutions: '/resolutions/patient/me/?offset=0&limit=200',
};

export const AUTHSERVICE = {
  register: '/auth/registration',
  login: '/auth/login',
  profile: '/auth/profile',
};

export const DOCTORSERVICE = {
  patients: '/appointments/doctor/me/?offset=0&limit=10000',
  deleteAppointment: '/appointments/',
  createResolution: '/resolutions',
  updateResolution: '/resolutions/',
  deleteResolution: '/resolutions/',
  resolutions: '/resolutions/doctor/me/?offset=0&limit=10000',
  updateAppointment: '/appointments/',
};
