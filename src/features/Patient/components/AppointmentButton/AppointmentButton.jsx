import React from 'react';
import { StyledAppointmentButton } from './AppointmentButton.stled';

export function AppointmentButton({
  onClick, children,
}) {
  return (
    <StyledAppointmentButton type="button" onClick={onClick}>
      <span>
        {children}
      </span>
    </StyledAppointmentButton>
  );
}
