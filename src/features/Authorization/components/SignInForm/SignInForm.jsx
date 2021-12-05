import React from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import { AuthButton } from '../AuthButton';
import { ErrorMessageText, Input } from '../../../../components';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import { signInValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';

export function SignInForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={signInValidation}
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
          component={Input}
          img={imgLock}
          placeholder={DICTIONARY.authForm.password}
          isVisible
          name="password"
        />
        <ErrorMessage component={ErrorMessageText} name="password" />
        <div>
          <AuthButton marginType>
            {DICTIONARY.authForm.signIn}
          </AuthButton>
        </div>
      </Form>
    </Formik>
  );
}
