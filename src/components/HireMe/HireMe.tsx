import React from 'react';

import {Container} from '../App.styled';
import {HireMeContainer, HireMeLink, HireMeTitle, HireMeWrapper} from './HireMe.styled';


export const HireMe = () => {
    return (
        <HireMeWrapper>
            <Container>
                <HireMeContainer>
                    <HireMeTitle>I am available for remote work!</HireMeTitle>
                    <HireMeLink>Hire me</HireMeLink>
                </HireMeContainer>
            </Container>
        </HireMeWrapper>
    );
};

