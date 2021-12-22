export interface DoctorModel {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string
}

export interface PatientsAppointmentsModel {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
  doctor: DoctorModel,
}

export interface DoctorsModel {
  id: string,
  last_name: string,
  first_name: string
}

export interface PatientResolutionsModel {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  doctor: DoctorModel,
}

export interface InitialStateTypes {
  doctors: DoctorsModel[] | null,
  freeTime: [] | null,
  appointment: {} | null,
  patientAppointments: null | {
    appointments: null | PatientsAppointmentsModel[]
  },
  patientResolutions: null | {
    resolutions: null | PatientResolutionsModel []
  }
  loading: boolean,
  error: null | string,
}

