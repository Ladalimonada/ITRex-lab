// import React from 'react';
import styled from 'styled-components';
import imgBig from '../../../../img/bg.png';

export const StyledWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    background-image: url(${imgBig});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 600px) {
      background-size:contain;
    }
`;
