import React from 'react';
import {
  TextContainer, Circle, StyledText, Container,
} from './AppointmentContainer.styled';

export function AppointmentContainer({ index, text, children }) {
  return (
    <Container>
      <TextContainer>
        <Circle>
          <StyledText>
            {index}
          </StyledText>
        </Circle>
        <StyledText>
          {text}
        </StyledText>
      </TextContainer>
      {children}
    </Container>
  );
}
