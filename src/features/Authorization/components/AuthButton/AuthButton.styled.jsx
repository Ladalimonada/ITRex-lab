import styled from 'styled-components';
import img from '../../../../img/angle-right-b.png';
import { StyledButton } from '../../../../components/Button';

export const StyledAuthButton = styled(StyledButton)`
  padding: 16px 56px 16px 24px;
  margin: ${((props) => (props.marginType === true ? '5vh 0 32px' : '7vh 0 0'))} ;
  color: #ffffff;
  background-color: #7297FF;
  font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
span {
  position: relative;
}
span::after {
  content: url(${img});
        position: absolute;
        top: 0;
        right: -30px;
}
`;
