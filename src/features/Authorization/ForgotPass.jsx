import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthButton, AuthFlexContainer,
} from './components';
import {
  Title, Form, Input, Text,
} from '../../components';
import imgEmail from '../../img/email.png';
import imgArrow from '../../img/angle-left-b.png';
import { DICTIONARY } from '../../shared/dictionary';

export function ForgotPass() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <AuthFlexContainer margin="13vh 0 0">
          <Link to="/signin">
            <img alt="arrow left" src={imgArrow} />
          </Link>
          <Title margin="0 0 0 40px">{DICTIONARY.authForm.restorePassword}</Title>
        </AuthFlexContainer>
        <Text width="368px" margin="4vh 0 0">
          {DICTIONARY.authForm.restorePasswordText}
        </Text>
        <Form>
          <Input img={imgEmail} placeholder={DICTIONARY.authForm.email} type="text" />
          <Link to="/passwordrestored">
            <div>
              <AuthButton margin="5vh 0 32px">
                {DICTIONARY.authForm.sentResetLink}
              </AuthButton>
            </div>
          </Link>
        </Form>
      </StyledContainer>
    </StyledWrapper>
  );
}
