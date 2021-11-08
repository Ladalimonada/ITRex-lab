import React from 'react';
import styled from 'styled-components';

export function Title({ children, margin }) {
  return <StyledTitle margin={margin}>{children}</StyledTitle>;
}

export const StyledTitle = styled('h2')`
  margin: ${(props) => props.margin};
  font-weight: 600;
  font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
`;
