import React from 'react';
import Select from 'react-select';
import { customStyles } from './CustomSelect.styled';

export const CustomSelect = (field, props) => (
  <Select
    {...field}
    {...props}
    styles={customStyles}
  />
);