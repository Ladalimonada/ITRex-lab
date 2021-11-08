import React from 'react';
import styled from 'styled-components';

export function LinkElement({
  children,
}) {
  return (
    <StyledLink>{children}</StyledLink>
  );
}

const StyledLink = styled.a`
    color: #7297FF;
    font-weight: 600;
    text-decoration: underline;
    line-height: 1.3;
    cursor: pointer;
    `;
