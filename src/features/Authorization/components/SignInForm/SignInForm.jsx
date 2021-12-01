/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { logInUser, getUserProfile } from '../../authSlice';

export function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLog = ({
    email, password,
  }) => {
    const params = {
      userName: email,
      password,
    };
    dispatch(logInUser(params));
    dispatch(getUserProfile());
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'Patient') {
      navigate('/appointments', { replace: true });
    } else if (userRole === 'Doctor') {
      navigate('/patients', { replace: true });
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleLog}
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
            <AuthButton onClick={handleSubmit} marginType>
              {DICTIONARY.authForm.signIn}
            </AuthButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
