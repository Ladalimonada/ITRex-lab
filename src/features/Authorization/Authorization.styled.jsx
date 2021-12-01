import styled from 'styled-components';
import imgBig from '../../img/bg.png';

export const StyledWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    background-image: url(${imgBig});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 600px) {
      background-size:contain;
    }
`;

export const StyledContainer = styled('div')`
  padding: 15vh 96px 7.81vh;
  background: #F9FAFF;
    @media (max-width: 600px) {
        margin-top: 72px;
        width: 100%;
        padding: 4.5vh 10vw 0;
        border-radius: 24px 24px 0px 0px;
    }
`;

export const StyledBox = styled.div`
    display: flex;
    margin: 13vh 0 0;
    @media (max-width: 600px) {
    margin-top: 0;
}
`;

export const StyledTitle = styled.h2`
   margin: 0 0 0 40px;
   font-weight: 600;
   font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
`;

export const StyledText = styled.p`
    margin: 10vh 12px 0px 0px;
    color: #A1ABC9;
    line-height: 1.3;
    text-align:justify;
    span {
      color: #7297FF;
      cursor: pointer;
      margin: 0 7px
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    `;

export const StyledRestoreText = styled(StyledText)`
    width: 368px;
    margin: 4vh 0 0;`;
