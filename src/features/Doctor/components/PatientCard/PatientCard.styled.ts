import styled from 'styled-components';

export const StyledPatientCard = styled.div`
    position: relative;
    background-color: white;    
    padding: 24px 32px 40px;
    width: 24%;
    border-radius: 8px;
    margin: 12px 10px 12px 0;
    border-radius: 12px;
    &::before{
        position: absolute;
        content:'';
        top:95px;
        left:0;
        display: block;
        height: 1px;
        width:100%;
        background-color:#DCE0EC;
    }
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

export const StyledPatientCardHeader = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 48px;
`;

export const StyledPatientCardHeaderContainer = styled.div`
    h3 {
        font-size: 17px;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;

export const StyledPatientCardHeaderBox = styled.div`
margin-left: auto;
align-self: center;
`;

export const StyledPatientCardTime = styled.div`
    display: flex;
    align-items: center;
    h4 {
       font-weight: 600; 
    }`;

export const StyledPatientCardDesc = styled.div`
    display: flex;
    margin-top: 16px;
    align-items: center;
`;
