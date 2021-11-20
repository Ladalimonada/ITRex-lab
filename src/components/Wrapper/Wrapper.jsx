import React from 'react';
import { StyledWrapper, StyledContainer } from './Wrapper.styled';
import { Header } from '../Header/Header';

export function Wrapper({
  avatar, name, position, children,
}) {
  return (
    <StyledWrapper>
      <Header avatar={avatar} name={name} position={position} />
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}
