import React from 'react';
import { SignInForm } from './components';
import {
  StyledBox, StyledWrapper, StyledContainer, StyledText, AuthFooter, StyledLink,
} from './Authorization.styled';
import { Title } from '../../components';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';

export function SignIn() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledBox>
          <Title>{DICTIONARY.authForm.signIn}</Title>
        </StyledBox>
        <SignInForm />
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
