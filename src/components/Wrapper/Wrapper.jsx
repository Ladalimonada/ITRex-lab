import React from 'react';
import styled from 'styled-components';
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

export const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 64px 48px;
    background-color:#E3EBFF;
    @media (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledContainer = styled.div`
    width: 100%;
    height: 90%;
    background-color:#F9FAFF;
    padding: 0 48px;
    @media (max-width: 600px) {
        height: 100%;
        border-radius: 24px 24px 0px 0px;
        padding: 20px;
    }
`;
