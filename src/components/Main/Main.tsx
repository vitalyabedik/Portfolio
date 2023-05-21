import React from 'react';

import {Container} from '../../assets/styles/Container.styled';
import {Greeting, MainContainer, Photo} from './Main.styled';

export const Main = () => {
    return (
        <MainContainer>
            <Container justifyContent="space-around">
                <Greeting>
                    <span>Hi There</span>
                    <h1>I am Vitali Bedik</h1>
                    <p>Frontend Developer</p>
                </Greeting>
                <Photo></Photo>
            </Container>
        </MainContainer>

    );
};

