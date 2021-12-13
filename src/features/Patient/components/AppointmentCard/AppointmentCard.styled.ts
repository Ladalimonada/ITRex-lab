import styled from 'styled-components';

export const StyledAppointmentCard = styled.div`
    background-color: white;    
    padding: 24px 32px 40px;
    width: 406px;
    border-radius: 8px;
    margin: 12px 10px 12px 0;
    border-radius: 12px;
    img {
        margin-right: 16px;
    }
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 450px) {
        margin-right: 0;
    }
`;

export const StyledAppointmentHeader = styled.div`
    display: flex;
    margin-bottom: 48px;
`;

export const StyledAppointmentHeaderContainer = styled.div`
    h3 {
        font-size: 17px;
        font-weight: 600;
    }
    p {
        font-size: 13px;
        margin-top: 5px;
        color: #A1ABC9;
    }
`;

export const StyledAppointmentTime = styled.div`
    display: flex;
    align-items: center;
    h4 {
       font-weight: 600; 
    }`;

export const StyledAppointmentDesc = styled.div`
    display: flex;
    margin-top: 16px;
    align-items: center;
`;
