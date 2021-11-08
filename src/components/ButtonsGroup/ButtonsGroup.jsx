import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button';

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

const ButtonsBlock = styled.div`
display: flex;
padding-top:40px;
margin-bottom:56px;
@media (max-width:600px) {
    margin-bottom:40px;
    justify-content: space-around;
}
`;

const StyledGroupButton = styled(StyledButton)`
    font-weight: normal;
    width: 160px;
    padding: 12px 0;
    margin-right: 12px;
    @media (max-width:600px){
        width: 120px;
        margin-right: 0;
    }
`;
