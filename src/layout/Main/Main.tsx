import React from 'react';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

import {Container} from '../../App.styled';
import {Greeting, GreetingTitle, InfoText, MainContainer, MainInfo, MainWrapper, TextContact} from './Main.styled';

import {Span, Title1} from '../../components';

export const Main = () => {
    return (
        <MainWrapper id="Home">
            <MainContainer>
                <Container>
                    <MainInfo>
                            <Greeting>
                        <Fade direction={'down'} delay={300} triggerOnce={true}>
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
                        <Fade direction={'down'} delay={300} triggerOnce={true}>
                            <TextContact>E: <a href="mailto:vitalya.bedik@gmail.com">vitalya.bedik@gmail.com</a></TextContact>
                            <TextContact>T: <a href="tel:+375333599091">+375 (33) 359 90 91</a></TextContact>
                        </Fade>
                            </InfoText>
                    </MainInfo>
                </Container>
            </MainContainer>
        </MainWrapper>
    );
};

