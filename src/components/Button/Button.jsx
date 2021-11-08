import React from 'react';
import styled from 'styled-components';

export function Button({
  onClick, isActive, children, margin,
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      isActive={isActive}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  margin: ${(props) => (props.margin)};
  padding: 12px 0;
  color: ${(props) => (props.isActive ? '#ffffff' : '#7297FF')};
  background: ${(props) => (props.isActive ? '#7297FF' : '#ffffff')};
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
&:focus {
  outline: none;
}
&:hover 
{
  border: none;
};`;
