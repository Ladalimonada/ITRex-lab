export type ModalWindowProps = {
  userName?: string,
  onSubmit?: (values: {}, appointmentID: string) => void;
};

export type App = {
  value: string,
  label: string,
};

export type FormValues = {
  appointment: {
    value: string,
    label: string,
  },
};