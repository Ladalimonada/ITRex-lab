import React from 'react';
import styled from 'styled-components';

export function AuthFlexContainer({
  margin, children,
}) {
  return <StyledAuthContainer margin={margin}>{children}</StyledAuthContainer>;
}

export const StyledAuthContainer = styled.div`
display: flex;
margin: ${(props) => props.margin};
@media (max-width: 600px) {
    margin-top: 0;
}`;
