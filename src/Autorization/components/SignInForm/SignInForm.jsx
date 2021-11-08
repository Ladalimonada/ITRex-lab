import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import {
  AuthButton,
} from '../AuthButton';
import {
  Form, ErrorMessageText, Input,
} from '../../../components';
import imgEmail from '../../../img/email.png';
import imgLock from '../../../img/lock.png';
import { validationsScheme } from '../../validationScheme';

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
      validationSchema={validationsScheme}
    >
      {({
        handleSubmit,
      }) => (
        <Form>
          <Field
            as={Input}
            img={imgEmail}
            placeholder="Email"
            name="email"
            type="text"
          />
          <ErrorMessage component={ErrorMessageText} name="email" />
          <Field
            as={Input}
            img={imgLock}
            placeholder="Password"
            type="password"
            name="password"
          />
          <ErrorMessage component={ErrorMessageText} name="password" />
          <div>
            <AuthButton onClick={handleSubmit} type="submit" margin="5vh 0 32px">
              Sign Up
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
