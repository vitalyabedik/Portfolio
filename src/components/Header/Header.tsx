import React from 'react';

import {MainContainer} from '../../assets/styles/MainContainer.styled';
import {HeaderContainer} from './Header.styled';

import {Nav} from '../Nav';

export const Header = () => {
    return (
        <HeaderContainer>
            <MainContainer justifyContent="flex-end">
                <Nav/>
            </MainContainer>
        </HeaderContainer>
    );
};

