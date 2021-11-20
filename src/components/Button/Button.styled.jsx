import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  margin: ${(props) => (props.margin)};
  padding: 12px 0;
  color: ${(props) => (props.isActive ? '#ffffff' : '#7297FF')};
  background: ${(props) => (props.isActive ? '#7297FF' : '#ffffff')};
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
&:focus {
  outline: none;
}
&:hover 
{
  border: none;
}
${(props) => props.isDisabled && css`
color: white;
background: #DCE0EC;
cursor: not-allowed;
padding: 16px 40px;
margin-top: 300px;
margin-left: 320px;
`};`;
