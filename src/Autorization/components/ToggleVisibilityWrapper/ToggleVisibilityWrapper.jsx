import styled from 'styled-components';
import React from 'react';

export function ToggleVisibilityWrapper({ onClick, src, children }) {
  return (
    <Wrapper>
      {children}
      <Button onClick={onClick} src={src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
position: relative;
`;
const Button = styled.img`
cursor: pointer;
z-index: 1000;
position: absolute;
top: 55px;
right: 20px;
@media (max-width: 600px) {
    top: 37px;
    right: 10px;
        }
`;
