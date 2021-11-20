import React from 'react';
import { StyledLink } from './LinkElement.styled';

export function LinkElement({
  children,
}) {
  return (
    <StyledLink>{children}</StyledLink>
  );
}
