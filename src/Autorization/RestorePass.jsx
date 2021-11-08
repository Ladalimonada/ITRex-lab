import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthButton, AuthFlexContainer,
} from './components';
import {
  Title, Form, Input, Text,
} from '../components';
import imgEmail from '../img/email.png';
import imgArrow from '../img/angle-left-b.png';

export function RestorePass() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <AuthFlexContainer margin="13vh 0 0">
          <Link to="/signin">
            <img alt="arrow left" src={imgArrow} />
          </Link>
          <Title margin="0 0 0 40px">Restore Password</Title>
        </AuthFlexContainer>
        <Text width="368px" margin="4vh 0 0">
          Please use your email address, and we’ll send you the link to reset your password
        </Text>
        <Form>
          <Input img={imgEmail} placeholder="Email" type="text" />
          <Link to="/passwordrestored">
            <div>
              <AuthButton margin="5vh 0 32px">
                Send Reset Link
              </AuthButton>
            </div>
          </Link>
        </Form>
      </StyledContainer>
    </StyledWrapper>
  );
}
