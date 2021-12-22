export type ModalWindowProps = {
  typeofModal: 'createResolution' | 'updateResolution' | 'updateAppointment',
  userName?: string,
  onSubmit?: (values: {}, appointmentID: string) => void;
};

export type FormValues = {
  resolution: string,
};
