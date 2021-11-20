import React, { useState } from 'react';
import { ButtonsBlock, StyledGroupButton } from './ButtonsGroup.styled';

export function ButtonsGroup({
  buttons,
}) {
  const [activeButton, setActiveButton] = useState(buttons[0].title);
  const handleOnClick = (title) => {
    setActiveButton(title);
  };
  return (
    <ButtonsBlock>
      {
  buttons.map(({ title }) => (
    <StyledGroupButton
      isActive={title === activeButton}
      onClick={() => handleOnClick(title)}
    >
      {title}

    </StyledGroupButton>
  ))
}
    </ButtonsBlock>
  );
}
