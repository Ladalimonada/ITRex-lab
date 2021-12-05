import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SignInForm } from './components';
import {
  StyledBox, StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { Title } from '../../components';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';
import { logInUser, getUserProfile } from './authSlice';

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async ({
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
}
