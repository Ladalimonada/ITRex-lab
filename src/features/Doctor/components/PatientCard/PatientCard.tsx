import React from 'react';
import {
  StyledPatientCard,
  StyledPatientCardHeader,
  StyledPatientCardHeaderContainer,
  StyledPatientCardTime,
  StyledPatientCardDesc,
} from './PatientCard.styled';
import imgClock from '../../../../img/clock-three.png';
import imgDesc from '../../../../img/clipboard-blank.png';

export interface PatiendCardType {
  [name: string]: string
}

export const PatientCard = ({
  avatar, firstName, lastName, status, description, time, dataTestId,
}:PatiendCardType) => {
  return (
    <StyledPatientCard
      data-testid={dataTestId}
    >
      <StyledPatientCardHeader>
        <div>
          <img alt="avatar" src={avatar} height={40} width={40} />
        </div>
        <StyledPatientCardHeaderContainer>
          <h3>
            {`${firstName} ${lastName}`}
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
};
