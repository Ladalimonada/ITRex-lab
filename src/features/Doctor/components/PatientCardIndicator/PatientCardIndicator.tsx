import React from 'react';
import confirmedIndicator from '../../../../img/indicator-green.svg';
import waitingIndicator from '../../../../img/indicator-waiting.svg';
import canceledIndicator from '../../../../img/indicator-canceled.svg';
import { StyledIndicatorContainer } from './PatientCardIndicator.styled';
import { DICTIONARY } from '../../../../shared/dictionary';
import { PatientContainerIndicatorProps } from './PatientCardIndicator.types';

const getIndiacorImage = (status: 'confirmed' | 'waiting' | 'canceled') => {
  switch (status) {
    case 'confirmed':
      return confirmedIndicator;
    case 'waiting':
      return waitingIndicator;
    case 'canceled':
      return canceledIndicator;
  }
};

export const PatientCardIndicator = ({ status }: PatientContainerIndicatorProps) => {
  return (
    <StyledIndicatorContainer>
      <img src={getIndiacorImage(status)} alt={status}></img>
      <p>{DICTIONARY.appointmentStatus[status]}</p>
    </StyledIndicatorContainer>
  );
};