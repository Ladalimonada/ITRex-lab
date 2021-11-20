import styled from 'styled-components';

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
