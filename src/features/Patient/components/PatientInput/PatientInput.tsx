import React from 'react';
import { PatientStyledInput } from './PatientInput.styled';
import { PatientInputProps } from './PatientInput.types';


export const PatientInput = ({
  placeholder, name, ...restProps
}:PatientInputProps) => {
  return (<PatientStyledInput 
    name={name}
    placeholder={placeholder}
    {...restProps} />);
};
