import React from 'react';
import { StyledButton } from './SubmitButton.styled';

export type SubmitButtonProps = {
  children: JSX.Element | String,
  isDisabled?: boolean
};

export function SubmitButton({
  children, isDisabled,
}:SubmitButtonProps) {
  return (
    <StyledButton
    isDisabled={isDisabled}
    type="submit"
    >
      {children}
    </StyledButton>
  );
}
