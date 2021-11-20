import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledContainer, StyledWrapper, AuthFlexContainer,
} from './components';
import {
  Title, Text,
} from '../../components';
import imgArrow from '../../img/angle-left-b.png';
import { DICTIONARY } from '../../shared/dictionary';

export function RestorePass() {
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
          An email has been sent to
          <span>example@exam.com</span>
          Check your inbox, and click the reset link provided.
        </Text>
      </StyledContainer>
    </StyledWrapper>
  );
}
