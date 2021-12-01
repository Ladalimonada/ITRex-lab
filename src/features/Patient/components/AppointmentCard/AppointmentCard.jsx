import React from 'react';
import {
  StyledAppointmentCard,
  StyledAppointmentHeader, StyledAppointmentHeaderContainer,
  StyledAppointmentTime, StyledAppointmentDesc,
} from './AppointmentCard.styled';
import imgClock from '../../../../img/clock-three.png';
import imgReason from '../../../../img/reason.png';

export function AppontmentCard({
  avatar, firstName, lastName, doctorsSpecialization, description, time,
}) {
  return (
    <StyledAppointmentCard
      avatar={avatar}
      firstName={firstName}
      lastName={lastName}
      doctorsSpecialization={doctorsSpecialization}
      description={description}
      time={time}
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
            {doctorsSpecialization}
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
}
