export interface PatientModel {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export interface DoctorAppointmentsModel {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: 'confirmed' | 'waiting' | 'canceled',
  patient: PatientModel,
}

export interface ResolutionModel {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string
}

export interface ResolutionsModel {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  patient: PatientModel
}

export type UpdateResolutionParams = {
  resolution: {};
  resolutionID: string;
};

export type UpdateAppointmentParams = {
  status: {};
  appointmentID: string;
};

export interface InitialStateTypes {
  doctorAppointments: null | {
    appointments: DoctorAppointmentsModel[]
  },
  loading: boolean,
  error: null | string,
  deletedAppointment: null | string,
  resolution: null | ResolutionModel,
  doctorResolutions: null | {
    resolutions: ResolutionsModel[],
  }
  deletedResolution: null | string,
  updatedResolution: null | string,
  updatedAppointment: null | string,
}