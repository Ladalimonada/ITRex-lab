import React from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import { AuthButton } from '../index';
import { ErrorMessageText, Input } from '../../../../components';
import imgName from '../../../../img/user.png';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import imgCheck from '../../../../img/check.png';
import { signUpValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';

export function SignUpForm({ onSubmit }) {
  return (
    <Formik
      const
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={signUpValidation}
    >
      {() => (
        <Form>
          <Field
            as={Input}
            img={imgName}
            name="firstName"
            placeholder={DICTIONARY.authForm.firstName}
          />
          <ErrorMessage component={ErrorMessageText} name="firstName" />
          <Field
            as={Input}
            img={imgName}
            placeholder={DICTIONARY.authForm.lastName}
            name="lastName"
          />
          <ErrorMessage component={ErrorMessageText} name="lastName" />
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
          <Field
            as={Input}
            img={imgCheck}
            isVisible
            placeholder={DICTIONARY.authForm.confirmPassword}
            name="confirmPassword"
          />
          <ErrorMessage component={ErrorMessageText} name="confirmPassword" />
          <div>
            <AuthButton type="submit">
              {DICTIONARY.authForm.signUp}
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
