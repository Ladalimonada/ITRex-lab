import React from 'react';
import { StyledWrapper, StyledText, StyledImg, StyledTextTop } from './Page404.styled';
import img from '../../img/404page.png';
import { DICTIONARY } from '../../shared/dictionary';

export const Page404 = () => {
  return (
       <StyledWrapper>
        <StyledImg src={img} alt="404"></StyledImg>
        <StyledTextTop>{DICTIONARY.page404.textTop}</StyledTextTop>
        <StyledText>
        {DICTIONARY.page404.text}
        </StyledText>
    </StyledWrapper> );
};