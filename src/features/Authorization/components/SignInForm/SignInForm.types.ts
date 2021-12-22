export interface FormValues {
  email: string,
  password: string,
}
  
export type SignInFormProps = {
  onSubmit: ( values:{ email: string,
    password: string, } ) => void
};
  