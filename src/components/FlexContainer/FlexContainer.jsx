import React from 'react';
import { StyledDiv } from './FlexContainer.styled';

export const FlexContainer = ({
  margin, children,
}) => {
  <StyledDiv margin={margin}>{children}</StyledDiv>;
};
