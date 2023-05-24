import React from 'react';

import {Container} from '../../assets/styles/Container.styled';
import {HeaderContainer, HeaderWrapper} from './Header.styled';

import {Nav} from '../Nav';

export const Header = () => {
    return (
        <HeaderWrapper>
            <Container margin="50px">
                <HeaderContainer>
                    <Nav/>
                </HeaderContainer>
            </Container>
        </HeaderWrapper>
    );
};

