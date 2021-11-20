import React from 'react';
import { StyledAuthContainer } from './AuthFlexContainer.styled';

export function AuthFlexContainer({
  margin, children,
}) {
  return <StyledAuthContainer margin={margin}>{children}</StyledAuthContainer>;
}
