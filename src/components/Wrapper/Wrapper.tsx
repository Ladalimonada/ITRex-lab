/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { StyledWrapper, StyledContainer } from './Wrapper.styled';
import { Header } from '../Header';
import { fetchUserProfile } from '../../features/Authorization/redux/authSlice';
import { userProfile, userProfileLoading } from '../../features/Authorization/redux/authSelectors';
import { Spinner } from 'components';
import { WrapperProps } from './Wrapper.types';

export const Wrapper = ({
  children,
}:WrapperProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  const profile = useAppSelector(userProfile);
  const isProfileLoading = useAppSelector(userProfileLoading);

  if (isProfileLoading || profile === null) {
    return <Spinner />;
  }

  return  (
    <StyledWrapper>
      <Header 
      avatar={profile.photo} 
      userName={`${profile.first_name} ${profile.last_name}`} 
      role={profile.role_name} />
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};
