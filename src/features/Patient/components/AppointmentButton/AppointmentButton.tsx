import React from 'react';
import { StyledAppointmentButton } from './AppointmentButton.styled';
import { AppointmentButtonProps } from './AppointmentButton.types';

export function AppointmentButton({
  children,
}:AppointmentButtonProps) {
  return (
    <StyledAppointmentButton type="button">
      <span>
        {children}
      </span>
    </StyledAppointmentButton>
  );
}
