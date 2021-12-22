import styled from 'styled-components';
import indicator from '../../img/indicator.svg';

export const StyledHeader = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
`;

export const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    @media (max-width: 450px) {
        display: none;
    }
`;

export const StyledText = styled.p`
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

export const StyledDiv = styled.div`
position:relative;
width:40px;
height: 40px;
& ::after{
  position:absolute;
  content: url(${indicator}); 
  top:-3px;
  right: -3px;
  color: red;
}
`;
