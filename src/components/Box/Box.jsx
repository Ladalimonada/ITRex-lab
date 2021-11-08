import React from 'react';
import styled from 'styled-components';

export function Box({
  children,
}) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}

export const StyledBox = styled.div`
    max-height: 55vh;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
