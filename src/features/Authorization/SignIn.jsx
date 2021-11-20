import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthFooter, AuthFlexContainer, SignInForm,
} from './components';
import {
  Title, Text, LinkElement,
} from '../../components';
import { DICTIONARY } from '../../shared/dictionary';

export function SignIn() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <AuthFlexContainer margin="13vh 0 0">
          <Title>{DICTIONARY.authForm.signIn}</Title>
        </AuthFlexContainer>
        <SignInForm />
        <Link to="/restorepass">
          <LinkElement>{DICTIONARY.authForm.forgotPassword}</LinkElement>
        </Link>
        <AuthFooter>
          <Text margin="10vh 12px 0px 0px">{DICTIONARY.authForm.haveAccount}</Text>
          <LinkElement>{DICTIONARY.authForm.signIn}</LinkElement>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
