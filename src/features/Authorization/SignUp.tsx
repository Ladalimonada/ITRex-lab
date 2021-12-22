import React from 'react';
import { useAppDispatch } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from './components';
import { Title } from '../../components';
import {
  StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { createUser, fetchUserProfile } from './redux/authSlice';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  interface Params {
    [key: string]: string
  }

  const handleReg = async ({
    firstName, lastName, email, password,
  }:Params) => {
    const params = {
      firstName,
      lastName,
      userName: email,
      password,
    };
    await dispatch(createUser(params));
    await dispatch(fetchUserProfile());
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
};
