import styled from 'styled-components';

export const StyledLabel = styled.label`
position: relative;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
height: 40px;
width: 104px;
background-color: ${(props) => (props.disabled ? 'red' : 'white')};
font-weight: 600;
border-radius: 8px;
`;

export const StyledRadioButton = styled.input`
position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 40;
  width: 104;
  &:checked + ${StyledLabel} {
    border: 1px solid #7297FF;
    color: #7297FF;
  }
`;

export const Wrapper = styled.div`
margin: 0 16px 16px 0;
`;
