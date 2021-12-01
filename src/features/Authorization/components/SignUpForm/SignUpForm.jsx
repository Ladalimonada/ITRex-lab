import React from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AuthButton,
} from '../AuthButton';
import {
  ErrorMessageText, Input,
} from '../../../../components';
import imgName from '../../../../img/user.png';
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import imgCheck from '../../../../img/check.png';
import { signUpValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';
import { createUser, getUserProfile } from '../../authSlice';

export function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleReg = async ({
    firstName, lastName, email, password,
  }) => {
    const params = {
      firstName,
      lastName,
      userName: email,
      password,
    };
    await dispatch(createUser(params));
    await dispatch(getUserProfile());
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/sign-in', { replace: true });
    }
  };
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
      onSubmit={handleReg}
      validationSchema={signUpValidation}
    >
      {({
        handleSubmit,
      }) => (
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
            <AuthButton onClick={handleSubmit} type="submit">
              {DICTIONARY.authForm.signUp}
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
