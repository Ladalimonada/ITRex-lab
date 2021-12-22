import React from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import {
  StyledPatientCard, StyledPatientCardHeader, StyledPatientCardHeaderContainer, StyledPatientCardTime, StyledPatientCardDesc,
  StyledPatientCardHeaderBox,
} from './PatientCard.styled';
import { PatientCardIndicator } from '../../components';
import imgClock from '../../../../img/clock-three.png';
import imgDesc from '../../../../img/clipboard-blank.png';
import { PatiendCardType } from './PatientCard.types';
import { CustomMenu } from 'components/CustomMenu';
import { DICTIONARY } from 'shared/dictionary';
import { deleteAppointment } from '../../redux/doctorSlice';
import { ROUTES } from '../../../../shared/constants';

export const PatientCard = ({
  avatar, firstName, lastName, status, description, time, dataTestId, id,
}: PatiendCardType) => {
  const dispatch = useAppDispatch();

  return (
    <StyledPatientCard
      data-testid={dataTestId}
      id={id}
    >
      <StyledPatientCardHeader>
        <div>
          <img alt="avatar" src={avatar} height={40} width={40} />
        </div>
        <StyledPatientCardHeaderContainer>
          <h3>
            {`${firstName} ${lastName}`}
          </h3>
          <PatientCardIndicator status={status}/>
        </StyledPatientCardHeaderContainer>
        <StyledPatientCardHeaderBox>
          <CustomMenu
            menuItems={[
              { title: DICTIONARY.menu.createResolution, path: `${ROUTES.CREATE_RESOLUTION}${id}` },
              { title: DICTIONARY.menu.editAppointment, path: `${ROUTES.UPDATE_APPOINTMENT}${id}` },
              { title: DICTIONARY.menu.delete, isColored:true, onClick: () => { dispatch(deleteAppointment(id));} },
            ]}
          />
        </StyledPatientCardHeaderBox>
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
