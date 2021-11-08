import React from 'react';
import styled from 'styled-components';

export function FlexContainer({
  margin, children,
}) {
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
    display: flex;
    margin: ${(props) => props.margin};
`;
