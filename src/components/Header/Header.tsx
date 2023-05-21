import React from 'react';

import {Container} from '../../assets/styles/Container.styled';
import {HeaderContainer} from './Header.styled';

import {Nav} from '../Nav';

export const Header = () => {
    return (
        <HeaderContainer>
            <Container justifyContent="flex-end">
                <Nav/>
            </Container>
        </HeaderContainer>
    );
};

