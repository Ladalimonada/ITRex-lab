/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthFooter, SignInForm,
} from './components';
import {
  StyledBox, StyledWrapper, StyledContainer, StyledText,
} from './Authorization.styled';
import {
  Title, LinkElement,
} from '../../components';
import { DICTIONARY } from '../../shared/dictionary';

export function SignIn() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledBox>
          <Title>{DICTIONARY.authForm.signIn}</Title>
        </StyledBox>
        <SignInForm />
        <Link to="/restorepass">
          <LinkElement>
            {DICTIONARY.authForm.forgotPassword}
          </LinkElement>
        </Link>
        <AuthFooter>
          <StyledText>
            {DICTIONARY.authForm.haveAccount}
          </StyledText>
          <LinkElement>
            {DICTIONARY.authForm.signIn}
          </LinkElement>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
