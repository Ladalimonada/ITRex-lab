import styled from 'styled-components';

export const Circle = styled.div`
border-radius: 50%;
  width: 34px;
  height: 34px;
  margin-right: 16px;
  border: 1px solid #A1ABC9;
  text-align: center;
  line-height: 34px;
`;

export const StyledText = styled.p`
color:#A1ABC9;`;

export const TextContainer = styled.div`
display:flex;
align-items: center;
@media only screen and (max-width: 1300px) {
  margin-top: 30px;
}
`;
