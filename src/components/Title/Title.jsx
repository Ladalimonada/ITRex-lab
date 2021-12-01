import React from 'react';
import { StyledTitle } from './Title.styled';

export function Title({ margin, children }) {
  return <StyledTitle margin={margin}>{children}</StyledTitle>;
}
