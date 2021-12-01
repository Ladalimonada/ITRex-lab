/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWrapper, StyledContainer } from './Wrapper.styled';
import { Header } from '../Header/Header';
import { getUserProfile } from '../../features/Authorization/authSlice';

export function Wrapper({
  children,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  const isLoading = useSelector((state) => state.auth.loading);
  const {
    first_name, last_name, photo, role_name,
  } = useSelector((state) => state.auth.profile !== null && state.auth.profile);

  if (isLoading) {
    return <div />;
  }

  return (
    <StyledWrapper>
      <Header avatar={photo} name={`${first_name} ${last_name}`} role={role_name} />
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}
