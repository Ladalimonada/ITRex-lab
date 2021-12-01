import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledWrapper, StyledContainer, StyledBox, StyledTitle, StyledRestoreText,
} from './Authorization.styled';
import imgArrow from '../../img/angle-left-b.png';
import { DICTIONARY } from '../../shared/dictionary';

export function RestorePass() {
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
          An email has been sent to
          <span>example@exam.com</span>
          Check your inbox, and click the reset link provided.
        </StyledRestoreText>
      </StyledContainer>
    </StyledWrapper>
  );
}
