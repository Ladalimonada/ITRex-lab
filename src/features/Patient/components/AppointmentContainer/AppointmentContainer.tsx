import React from 'react';
import { TextContainer, Circle, StyledText, Container } from './AppointmentContainer.styled';
import { AppointmentContainerProps } from './AppointmentContainer.types';


export function AppointmentContainer({ index, text, children }:AppointmentContainerProps) {
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
