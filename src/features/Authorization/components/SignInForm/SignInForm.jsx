import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import {
  AuthButton,
} from '../AuthButton';
import {
  Form, ErrorMessageText, Input,
} from '../../../../components';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import { signInValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';

export function SignInForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={signInValidation}
    >
      {({
        handleSubmit,
      }) => (
        <Form>
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
            <AuthButton onClick={handleSubmit} type="submit" margin="5vh 0 32px">
              {DICTIONARY.authForm.signIn}
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
