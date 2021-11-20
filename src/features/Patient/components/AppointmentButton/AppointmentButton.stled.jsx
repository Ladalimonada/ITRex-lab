import styled from 'styled-components';
import { StyledButton } from '../../../../components/Button';
import img from '../../../../img/plus.png';

export const StyledAppointmentButton = styled(StyledButton)`
  padding: 14px 16px 14px 48px;
  color: #ffffff;
  background-color: #7297FF;
  font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
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
