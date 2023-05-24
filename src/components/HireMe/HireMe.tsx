import React from 'react';

import {HireMeContainer, HireMeLink, HireMeTitle, HireMeWrapper} from './HireMe.styled';
import {Container} from '../../assets/styles/Container.styled';

export const HireMe = () => {

    return (
        <HireMeWrapper>
            <Container flexDirection="column">
                <HireMeContainer>
                    <HireMeTitle>I am available for remote work!</HireMeTitle>
                    <HireMeLink>Hire me</HireMeLink>
                </HireMeContainer>
            </Container>
        </HireMeWrapper>
    );
};

