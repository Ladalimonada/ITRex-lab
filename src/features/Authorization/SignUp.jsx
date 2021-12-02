import React from 'react';
import { SignUpForm } from './components';
import { Title } from '../../components';
import {
  StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';

export function SignUp() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>{DICTIONARY.authForm.signUp}</Title>
        <SignUpForm />
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
