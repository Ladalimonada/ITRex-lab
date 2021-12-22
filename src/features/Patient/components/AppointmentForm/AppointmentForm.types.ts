export type AppointmentFormProps = {
  onSubmit: (values: {
    note: string,
    date: string,
  }) => void
};

interface DoctorsModel {
  label: string,
  value: string
}


export interface InitialValuesType {
  occupation: string,
  doctorsName: DoctorsModel | null,
  visitReason: string,
  note: string,
  date: Date,
  time: string
}
