import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

export const StyledRadiButtonGroup = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top:3em;
width: 25vw;
:after {
  content: "";
  flex: auto;
}
`;

export const Box = styled.div`
display: flex;
justify-content: space-between;

`;

export const StyledH4 = styled.h4`
margin-top: 3em;
font-size: 13px;
font-weight:600;
`;
