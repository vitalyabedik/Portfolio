import React from 'react';

import {Container} from '../../App.styled';
import {HireMeContainer, HireMeWrapper} from './HireMe.styled';

import {Title2} from '../../components';
import {Button} from '../../components/Button';


export const HireMe = () => {
    return (
        <HireMeWrapper>
            <Container>
                <HireMeContainer>
                    <Title2>Interested in working with me?</Title2>
                    <Button>Hire me</Button>
                </HireMeContainer>
            </Container>
        </HireMeWrapper>
    );
};

