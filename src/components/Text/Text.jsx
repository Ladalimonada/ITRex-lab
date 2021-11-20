import React from 'react';
import { StyledText } from './Text.styled';

export function Text({
  margin, width, children,
}) {
  return (
    <StyledText
      margin={margin}
      width={width}
    >
      {children}
    </StyledText>
  );
}
