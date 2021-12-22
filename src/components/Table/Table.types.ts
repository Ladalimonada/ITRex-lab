export interface DoctorModel {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string,
}

export interface PatientModel {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export interface ResolutionsModel {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  patient?: PatientModel,
  doctor?: DoctorModel
}

export type TableProps = {
  data: ResolutionsModel[], 
  type: 'patient' | 'doctor'
}; 