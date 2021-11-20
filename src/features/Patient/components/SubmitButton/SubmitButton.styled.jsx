import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
width: 160px;
  margin-top: 50%;
  margin-bottom: 20px;
  align-self: flex-end;
  padding: 16px 40px;
  color: white;
  background: #7297FF;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 600;
&:focus {
  outline: none;
}
&:hover 
{
  border: none;
}
${(props) => props.isDisabled && css`
background: #DCE0EC;
cursor: not-allowed;
`};`;
