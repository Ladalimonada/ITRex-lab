import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../../components/Button';
import img from '../../../img/angle-right-b.png';

export function AuthButton({
  onClick, children, margin = '7vh 0 0',
}) {
  return <StyledAuthButton type="button" onClick={onClick} margin={margin}><span>{children}</span></StyledAuthButton>;
}

export const StyledAuthButton = styled(StyledButton)`
  padding: 16px 56px 16px 24px;
  color: #ffffff;
  background-color: #7297FF;
  font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
span {
  position: relative;
}
span::after {
  content: url(${img});
        position: absolute;
        top: 0;
        right: -30px;
}
`;
