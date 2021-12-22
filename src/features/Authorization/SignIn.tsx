import React from 'react';
import { useAppDispatch } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';
import { SignInForm } from './components';
import {
  StyledBox, StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { Title } from '../../components';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';
import { logInUser, fetchUserProfile } from './redux/authSlice';

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  interface Params {
    [key: string]: string
  }

  const handleSignIn = async ({
    email, password,
  }:Params) => {
    const params = {
      userName: email,
      password,
    };
    await dispatch(logInUser(params));
    await dispatch(fetchUserProfile());
    const userRole = localStorage.getItem('userRole');
    if (userRole && userRole === 'Patient') {
      navigate('/appointments', { replace: true });
    } else if (userRole && userRole === 'Doctor') {
      navigate('/patients', { replace: true });
    }
  };
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledBox>
          <Title>{DICTIONARY.authForm.signIn}</Title>
        </StyledBox>
        <SignInForm onSubmit={handleSignIn} />
        <StyledLink to={ROUTES.FORGOT_PASS}>
          {DICTIONARY.authForm.forgotPassword}
        </StyledLink>
        <AuthFooter>
          <StyledText>
            {DICTIONARY.authForm.dontHaveAccount}
          </StyledText>
          <StyledLink to={ROUTES.SIGN_UP}>
            {DICTIONARY.authForm.signUp}
          </StyledLink>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
};
