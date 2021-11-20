import styled from 'styled-components';

export const StyledWrapper = styled.div`
height: 100%;
width: 100%;
padding: 0 64px 48px;
background-color:#E3EBFF;
@media (max-width: 600px) {
    padding: 0;
}
`;

export const StyledContainer = styled.div`
width: 100%;
height: 90%;
overflow-y: auto;
background-color:#F9FAFF;
padding: 0 48px;
::-webkit-scrollbar {
        width: 0px;
    }
@media (max-width: 600px) {
    height: 100%;
    border-radius: 24px 24px 0px 0px;
    padding: 20px;
}
`;
