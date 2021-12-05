import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from './components';
import { Title } from '../../components';
import {
  StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { createUser, getUserProfile } from './authSlice';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';

export function SignUp() {
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
      navigate(`${ROUTES.SIGN_IN}`, { replace: true });
    }
  };
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>{DICTIONARY.authForm.signUp}</Title>
        <SignUpForm onSubmit={handleReg} />
        <AuthFooter>
          <StyledText>
            {DICTIONARY.authForm.haveAccount}
          </StyledText>
          <StyledLink to={ROUTES.SIGN_IN}>
            {DICTIONARY.authForm.signIn}
          </StyledLink>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
