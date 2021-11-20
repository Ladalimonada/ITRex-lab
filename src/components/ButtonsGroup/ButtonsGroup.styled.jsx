import styled from 'styled-components';
import { StyledButton } from '../Button';

export const ButtonsBlock = styled.div`
display: flex;
padding-top:40px;
margin-bottom:56px;
@media (max-width:600px) {
    margin-bottom:40px;
    justify-content: space-around;
}
`;

export const StyledGroupButton = styled(StyledButton)`
    font-weight: normal;
    width: 160px;
    padding: 12px 0;
    margin-right: 12px;
    @media (max-width:600px){
        width: 120px;
        margin-right: 0;
    }
`;
