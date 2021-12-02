import React from 'react';
import {
  StyledHeader, StyledHeaderContainer, StyledNameContainer, StyledText,
} from './Header.styled';
import logo from '../../img/logo.png';
import { Title } from '../Title/Title';

export function Header({
  avatar, name, role,
}) {
  return (
    <StyledHeader>
      <div>
        <img alt="logo" src={logo} />
      </div>
      <StyledHeaderContainer>
        <StyledNameContainer>
          <Title>{name}</Title>
          <StyledText>{role}</StyledText>
        </StyledNameContainer>
        <div>
          <img alt="avatar" width="40" height="40" src={avatar} />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
