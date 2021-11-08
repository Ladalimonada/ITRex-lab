import React from 'react';
import styled from 'styled-components';

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

const StyledText = styled.p`
    width:${(props) => props.width};
    margin:${(props) => props.margin};
    color: #A1ABC9;
    line-height: 1.3;
    text-align:justify;
    span {
      color: #7297FF;
      cursor: pointer;
      margin: 0 7px
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    `;
