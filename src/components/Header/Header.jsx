import React from 'react';
import {
  StyledHeader, StyledHeaderContainer, StyledNameContainer,
} from './Header.styled';
import logo from '../../img/logo.png';
import { Text } from '../Text';
import { StyledTitle } from '../Title/Title';

export function Header({
  avatar, name, position,
}) {
  return (
    <StyledHeader>
      <div>
        <img alt="logo" src={logo} />
      </div>
      <StyledHeaderContainer>
        <StyledNameContainer>
          <StyledTitle>{name}</StyledTitle>
          <Text>{position}</Text>
        </StyledNameContainer>
        <div>
          <img alt="avatar" src={avatar} />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
