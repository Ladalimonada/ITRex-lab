import React from 'react';
import {
  StyledHeader, StyledHeaderContainer, StyledNameContainer, StyledText, StyledDiv,
} from './Header.styled';
import { HeaderProps } from './Header.types';
import logo from '../../img/logo.png';
import { Title } from '../Title';

export const Header = ({
  avatar, userName, role,
}:HeaderProps) => {
  return (
    <StyledHeader>
      <div>
        <img alt="logo" src={logo} />
      </div>
      <StyledHeaderContainer>
        <StyledNameContainer>
          <Title>{userName}</Title>
          <StyledText>{role}</StyledText>
        </StyledNameContainer>
        <StyledDiv>
          <div></div>
          <img alt="avatar" width="40" height="40" src={avatar} />
        </StyledDiv>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
