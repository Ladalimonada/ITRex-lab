import styled from 'styled-components';

export const StyledBox = styled.div`
    max-height: 55vh;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
