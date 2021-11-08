import React from 'react';
import styled from 'styled-components';
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

export const StyledHeader = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
`;

export const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    @media (max-width: 450px) {
        display: none;
    }
`;

export const StyledTitel = styled.h3`
font-weight: 600;
font-size: 15px;
line-height: 130%;`;
