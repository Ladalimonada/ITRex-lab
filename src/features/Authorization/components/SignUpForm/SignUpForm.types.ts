export interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export type SignUpFormProps = {
  onSubmit: (values:{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
  }) => void
};