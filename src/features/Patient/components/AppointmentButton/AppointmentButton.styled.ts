import styled from 'styled-components';
import img from '../../../../img/plus.png';

export const StyledAppointmentButton = styled.button`
  padding: 14px 16px 14px 48px;
  color: #ffffff;
  background-color: #7297FF;
  font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
  border-radius: 8px;
    border: none;
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
span::before {
  content: url(${img});
        position: absolute;
        top: 0;
        left: -32px;
}
`;
