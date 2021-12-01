import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthFooter, SignUpForm,
} from './components';
import {
  Title, LinkElement,
} from '../../components';
import { StyledWrapper, StyledContainer, StyledText } from './Authorization.styled';
import { DICTIONARY } from '../../shared/dictionary';

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
          <Link to="/signin">
            <LinkElement>
              {DICTIONARY.authForm.signIn}
            </LinkElement>
          </Link>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
