import React from 'react';
import styled from 'styled-components';
import imgClock from '../../../img/clock-three.png';
import imgDesc from '../../../img/clipboard-blank.png';

export function PatientCard({
  avatar, firstName, lastName, status, description, time,
}) {
  return (
    <StyledPatientCard
      avatar={avatar}
      firstName={firstName}
      lastName={lastName}
      status={status}
      description={description}
      time={time}
    >
      <StyledPatientCardHeader>
        <div>
          <img alt="avatar" src={avatar} />
        </div>
        <StyledPatientCardHeaderContainer>
          <h3>
            {firstName}
            {' '}
            {lastName}
          </h3>
          <p>
            {status}
          </p>
        </StyledPatientCardHeaderContainer>
      </StyledPatientCardHeader>
      <StyledPatientCardTime>
        <img alt="clock" src={imgClock} />
        <h4>
          {time}
        </h4>
      </StyledPatientCardTime>
      <StyledPatientCardDesc>
        <img alt="description" src={imgDesc} />
        <p>
          {description}
        </p>
      </StyledPatientCardDesc>
    </StyledPatientCard>
  );
}

export const StyledPatientCard = styled.div`
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
        width: auto;
    }
    @media (max-width: 450px) {
        margin-right: 0;
    }
`;

export const StyledPatientCardHeader = styled.div`
    display: flex;
    margin-bottom: 48px;
`;

export const StyledPatientCardHeaderContainer = styled.div`
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
