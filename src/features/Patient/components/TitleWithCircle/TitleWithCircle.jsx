import React from 'react';
import { TextContainer, Circle, StyledText } from './TitleWithCircle.styled';

export function TitleWithCircle({ number, text }) {
  return (
    <TextContainer>
      <Circle>
        <StyledText>
          {number}
        </StyledText>
      </Circle>
      <StyledText>
        {text}
      </StyledText>
    </TextContainer>
  );
}
