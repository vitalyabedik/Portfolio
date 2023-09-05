import React from 'react';

import {Container} from '../../App.styled';
import {HeaderContainer, HeaderWrapper} from './Header.styled';

import {Nav} from '../Nav';
import {Fade} from 'react-awesome-reveal';

export const Header = () => {
    return (
        <HeaderWrapper>
            <Fade delay={300} triggerOnce={true}>
                <Container margin="50px">
                    <HeaderContainer>
                        <Nav/>
                    </HeaderContainer>
                </Container>
            </Fade>
        </HeaderWrapper>
    );
};

