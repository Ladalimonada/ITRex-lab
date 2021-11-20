import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthFooter, SignUpForm,
} from './components';
import {
  Title, Text, LinkElement,
} from '../../components';
import { DICTIONARY } from '../../shared/dictionary';

export function SignUp() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>{DICTIONARY.authForm.signUp}</Title>
        <SignUpForm />
        <AuthFooter>
          <Text margin="10vh 12px 0px 0px">{DICTIONARY.authForm.haveAccount}</Text>
          <Link to="/signin">
            <LinkElement>{DICTIONARY.authForm.signIn}</LinkElement>
          </Link>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
