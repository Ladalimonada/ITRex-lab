import React from 'react';
import {
  TextContainer, Circle, StyledText, Container,
} from './AppointmentContainer.styled';

type AppointmentContainerProps = {
  index: string,
  text: string,
  children: string | React.ReactNode
};

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
