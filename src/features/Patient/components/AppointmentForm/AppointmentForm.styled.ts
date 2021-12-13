import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledRadiButtonGroup = styled.div`
display: flex;
flex-wrap: wrap;
margin-top:3em;
width: 25vw;
@media only screen and (max-width: 1300px) {
  width: 100%;
}
`;

export const Box = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 1300px) {
  flex-direction: column;
}
`;

export const StyledH4 = styled.h4`
margin-top: 3em;
font-size: 13px;
font-weight:600;
`;

export const StyledBox = styled.div`
    max-height: 55vh;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
