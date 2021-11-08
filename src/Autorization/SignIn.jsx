import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthFooter, AuthFlexContainer, SignInForm,
} from './components';
import {
  Title, Text, LinkElement,
} from '../components';

export function SignIn() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <AuthFlexContainer margin="13vh 0 0">
          <Title>Sign In</Title>
        </AuthFlexContainer>
        <SignInForm />
        <Link to="/restorepass">
          <LinkElement>Forgot Password?</LinkElement>
        </Link>
        <AuthFooter>
          <Text margin="10vh 12px 0px 0px">Already have an account?</Text>
          <LinkElement>Sign In</LinkElement>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
