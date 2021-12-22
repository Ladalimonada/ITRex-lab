import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button = ({
  onClick, children, margin, type,
}:ButtonProps) => {
  return (
    <StyledButton
      margin={margin}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </StyledButton>
  );
};
