import React from 'react';
import {
  StyledAppointmentCard,
  StyledAppointmentHeader, StyledAppointmentHeaderContainer,
  StyledAppointmentTime, StyledAppointmentDesc,
} from './AppointmentCard.styled';
import imgClock from '../../../../img/clock-three.png';
import imgReason from '../../../../img/reason.png';
import { AppointmentCardType } from './AppointmentCard.types';

export const AppontmentCard = ({
  avatar, firstName, lastName, doctorsSpecialization, description, time, dataTestId,
}:AppointmentCardType) => {
  return (
    <StyledAppointmentCard
      data-testid={dataTestId}
    >
      <StyledAppointmentHeader>
        <div>
          <img alt="avatar" height={40} width={40} src={avatar} />
        </div>
        <StyledAppointmentHeaderContainer>
          <h3>
            {`${firstName} ${lastName}`}
          </h3>
          <p>
            {doctorsSpecialization.toUpperCase}
          </p>
        </StyledAppointmentHeaderContainer>
      </StyledAppointmentHeader>
      <StyledAppointmentTime>
        <img alt="clock" src={imgClock} />
        <h4>
          {time}
        </h4>
      </StyledAppointmentTime>
      <StyledAppointmentDesc>
        <img alt="description" src={imgReason} />
        <p>
          {description}
        </p>
      </StyledAppointmentDesc>
    </StyledAppointmentCard>
  );
};
