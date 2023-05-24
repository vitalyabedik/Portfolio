import React from 'react';

import {HireMeContainer, HireMeLink, HireMeTitle} from './HireMe.styled';
import {Container} from '../../assets/styles/Container.styled';

export const HireMe = () => {

    return (
        <HireMeContainer>
            <Container flexDirection="column">
                <HireMeTitle>I am available for remote work!</HireMeTitle>
                <HireMeLink>Hire me</HireMeLink>
            </Container>
        </HireMeContainer>
    );
};

