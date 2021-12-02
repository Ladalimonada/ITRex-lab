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
import imgEmail from '../../../../img/email.png';
import imgLock from '../../../../img/lock.png';
import { signInValidation } from '../../authValidation';
import { DICTIONARY } from '../../../../shared/dictionary';
import { logInUser, getUserProfile } from '../../authSlice';

export function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLog = async ({
    email, password,
  }) => {
    const params = {
      userName: email,
      password,
    };
    await dispatch(logInUser(params));
    await dispatch(getUserProfile());
    const userRole = localStorage.getItem('userRole');
    if (userRole && userRole === 'Patient') {
      navigate('/appointments', { replace: true });
    } else if (userRole && userRole === 'Doctor') {
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
