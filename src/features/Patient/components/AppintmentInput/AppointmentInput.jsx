import React from 'react';
import { AppointmentStyledInput } from './AppointmentInput.styled';

export function AppointmentInput({
  field, form, meta, ...props
}) {
  return (<AppointmentStyledInput {...field} {...props} />);
}
