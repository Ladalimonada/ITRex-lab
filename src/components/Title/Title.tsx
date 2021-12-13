import React from 'react';
import { StyledTitle } from './Title.styled';

export type TitleProps = {
  children: React.ReactNode
};

export const Title = ({ children }:TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
