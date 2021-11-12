import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import {
  AuthButton,
} from '../AuthButton';
import {
  Form, ErrorMessageText, Input,
} from '../../../../components';
import imgName from '../../../../img/user.png';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import imgCheck from '../../../../img/check.png';
import { validationsScheme } from '../../validationScheme';

export function SignUpForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            img={imgName}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <ErrorMessage component={ErrorMessageText} name="firstName" />
          <Field
            as={Input}
            img={imgName}
            placeholder="Last Name"
            name="lastName"
            type="text"
          />
          <ErrorMessage component={ErrorMessageText} name="lastName" />
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
            isVisible
            name="password"
          />
          <ErrorMessage component={ErrorMessageText} name="password" />
          <Field
            as={Input}
            img={imgCheck}
            isVisible
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <ErrorMessage component={ErrorMessageText} name="confirmPassword" />
          <div>
            <AuthButton onClick={handleSubmit} type="submit">
              Sign Up
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
