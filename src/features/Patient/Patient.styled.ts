import styled from 'styled-components';

export const StyledTitle = styled('h2')`
margin: 0 0 42px;
font-weight: 600;
font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
`;

export const StyledContainer = styled('div')`
    display: flex; 
    justify-content: space-between;
`;

export const StyledTitleAppointment = styled('h2')`
   margin: 10vh 0 40px;
   font-weight: 600;
   font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
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
