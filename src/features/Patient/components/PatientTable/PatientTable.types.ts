export interface DoctorModel {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string,
}

export interface ResolutionsModel {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  doctor: DoctorModel
}

export type PatientTableProps = {
  data: ResolutionsModel[], 
}; 
