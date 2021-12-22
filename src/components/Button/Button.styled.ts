import styled, { css } from 'styled-components';
import img from '../../img/angle-right-b.png';
import { ButtonProps } from './Button.types';


export const StyledButton = styled.button<ButtonProps>`
  padding: 16px 56px 16px 24px;
  margin: ${((props) => (props.margin === true ? '5vh 0 32px' : '7vh 0 0'))} ;
  color: #ffffff;
  background-color: #7297FF;
  border: none;
  border-radius: 8px;
  font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 600;
&:focus {
  outline: none;
}
&:hover 
{
  border: none;
}
span {
  position: relative;
}
span::after {
  content: url(${img});
        position: absolute;
        top: 0;
        right: -30px;
}
${(props) => props.isDisabled && css`
color: white;
background: #DCE0EC;
cursor: not-allowed;
padding: 16px 40px;
margin-top: 300px;
margin-left: 320px;
`};`;

