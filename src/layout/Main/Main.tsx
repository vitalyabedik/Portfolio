import React from 'react';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

import {Container} from '../../App.styled';
import {Greeting, GreetingTitle, InfoText, MainContainer, MainInfo, MainWrapper} from './Main.styled';

import {Span, Title1} from '../../components';

export const Main = () => {
    return (
        <MainWrapper id="Home">
            <MainContainer>
                <Container>
                    <MainInfo>
                            <Greeting>
                        <Fade direction={'down'} delay={300}>
                                <Title1 >Hello, <Span>I’m Vitali</Span>
                                    <p>Front-end Developer</p>
                                    <p>Based in Soligorsk.</p>
                                </Title1>
                        </Fade>
                                <GreetingTitle>
                                    <Span>
                                        <ReactTypingEffect
                                            speed={100}
                                            typingDelay={1000}
                                            eraseDelay={1000}
                                            text={['I develop websites', 'I love coding']}
                                        />
                                    </Span>
                                </GreetingTitle>
                            </Greeting>
                            <InfoText>
                        <Fade direction={'down'} delay={300}>
                                <p>E: vitalya.bedik@gmail.com</p>
                                <p>T: +375 (33) 359 90 91</p>
                        </Fade>
                            </InfoText>
                    </MainInfo>
                </Container>
            </MainContainer>
        </MainWrapper>
    );
};

