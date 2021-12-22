import React from 'react';
import { StyledTitle } from './Title.styled';
import { TitleProps } from './Title.types';


export const Title = ({ children }:TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
