import React from 'react';
import { StyledBox } from './Box.styled';

export function Box({
  children,
}) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}
