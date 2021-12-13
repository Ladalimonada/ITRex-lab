import React from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import { ErrorMessageText, Input, Button } from '../../../../components';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import { signInValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';

interface FormValues {
  email: string,
  password: string,
}

type SignInFormProps = {
  onSubmit: ( values:{ email: string,
    password: string } ) => void
};

const initialValues: FormValues = {
  email: '',
  password: '',
};

export const SignInForm = ({ onSubmit }:SignInFormProps) => {
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidation}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form data-testid="signInForm">
        <Field
          as={Input}
          img={imgEmail}
          placeholder={DICTIONARY.authForm.email}
          name="email"
        />
        <ErrorMessage component={ErrorMessageText} name="email" />
        <Field
          as={Input}
          img={imgLock}
          placeholder={DICTIONARY.authForm.password}
          isVisible
          name="password"
        />
        <ErrorMessage component={ErrorMessageText} name="password" />
        <div>
          <Button type="submit" margin isDisabled>
            {DICTIONARY.authForm.signIn}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
