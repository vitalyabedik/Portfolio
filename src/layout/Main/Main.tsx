import React from 'react';

import {Container} from '../../App.styled';
import {Greeting, GreetingTitle, MainContainer, MainWrapper, Photo} from './Main.styled';
import {Span} from '../../components';

export const Main = () => {
    return (
        <MainWrapper>
            <Container>
                <MainContainer>
                    <Photo></Photo>
                    <Greeting>
                        <GreetingTitle id="Home">Hello, <Span>I’m Vitali Bedik</Span>, Front-end Developer
                            Based in Soligorsk.</GreetingTitle>
                        <p>I develop websites, I love interesting tasks</p>
                    </Greeting>
                </MainContainer>
            </Container>
        </MainWrapper>
    );
};

