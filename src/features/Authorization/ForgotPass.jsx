import React from 'react';
import { Link } from 'react-router-dom';
import {
  AuthButton,
} from './components';
import {
  Input,
} from '../../components';
import {
  StyledWrapper, StyledContainer, StyledBox, StyledTitle, StyledRestoreText,
} from './Authorization.styled';
import imgEmail from '../../img/email.png';
import imgArrow from '../../img/angle-left-b.png';
import { DICTIONARY } from '../../shared/dictionary';

export function ForgotPass() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledBox>
          <Link to="/signin">
            <img alt="arrow left" src={imgArrow} />
          </Link>
          <StyledTitle>{DICTIONARY.authForm.restorePassword}</StyledTitle>
        </StyledBox>
        <StyledRestoreText>
          {DICTIONARY.authForm.restorePasswordText}
        </StyledRestoreText>
        <Input img={imgEmail} placeholder={DICTIONARY.authForm.email} type="text" />
        <Link to="/passwordrestored">
          <div>
            <AuthButton marginType="regular">
              {DICTIONARY.authForm.sentResetLink}
            </AuthButton>
          </div>
        </Link>

      </StyledContainer>
    </StyledWrapper>
  );
}
