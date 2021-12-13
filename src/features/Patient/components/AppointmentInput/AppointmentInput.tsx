import React from 'react';
import { AppointmentStyledInput } from './AppointmentInput.styled';

export type AppointmentInputProps = {
  placeholder: string,
  name: string,
};

export const AppointmentInput = ({
  placeholder, name, ...restProps
}:AppointmentInputProps) => {
  return (<AppointmentStyledInput 
    name={name}
    placeholder={placeholder}
    {...restProps} />);
};
