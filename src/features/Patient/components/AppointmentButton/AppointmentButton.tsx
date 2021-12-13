import React from 'react';
import { StyledAppointmentButton } from './AppointmentButton.styled';

export type AppointmentButtonProps = {
  children: JSX.Element | string,
};

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
