import React from 'react';
import { ButtonsBlock, StyledGroupButton } from './ButtonsGroup.styled';
import { Link, useLocation } from 'react-router-dom';
import { ButtonGroupProps } from './ButtonsGroup.types';

export function ButtonsGroup({
  buttons, 
}:ButtonGroupProps) {
  const location = useLocation();
  return (
    <ButtonsBlock>
      {
  buttons.map(({ title, path }) => (
    <Link to={path}>
    <StyledGroupButton
      isActive={path === location.pathname}
      key={title}
    >
      {title}

    </StyledGroupButton>
    </Link>
  ))
}
    </ButtonsBlock>
  );
}
