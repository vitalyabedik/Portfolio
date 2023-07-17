import React from 'react';
import {Fade} from 'react-awesome-reveal';

import {Container} from '../../App.styled';
import {Greeting, GreetingTitle, InfoText, MainContainer, MainInfo, MainWrapper} from './Main.styled';

import {Span, Title1} from '../../components';

export const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <Container>
                    <Fade direction={'down'} delay={300}>
                        <MainInfo>
                            <Greeting>
                                <Title1 id="Home">Hello, <Span>I’m Vitali</Span>
                                    <p>Front-end Developer</p>
                                    <p>Based in Soligorsk.</p>
                                </Title1>
                                <GreetingTitle>I develop <Span>websites</Span></GreetingTitle>
                            </Greeting>
                            <InfoText>
                                <p>E: vitalya.bedik@gmail.com</p>
                                <p>T: +375 (33) 359 90 91</p>
                            </InfoText>
                        </MainInfo>
                    </Fade>
                </Container>
            </MainContainer>
        </MainWrapper>
    );
};

