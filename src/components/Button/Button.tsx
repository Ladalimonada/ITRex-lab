import React from 'react';
import { StyledButton } from './Button.styled';

export type ButtonProps = {
  children?: JSX.Element | string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  margin?: boolean,
  isDisabled?: boolean,
  type?: 'button' | 'submit' | 'reset' | undefined,
};

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
