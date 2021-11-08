import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthFooter, SignUpForm,
} from './components';
import {
  Title, Text, LinkElement,
} from '../components';

export function SignUp() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>Sign Up</Title>
        <SignUpForm />
        <AuthFooter>
          <Text margin="10vh 12px 0px 0px">Already have an account?</Text>
          <Link to="/signin">
            <LinkElement>Sign In</LinkElement>
          </Link>
        </AuthFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}
