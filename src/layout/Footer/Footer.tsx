import React from 'react';

import {Container} from '../../App.styled';
import {FooterContacts, FooterContainer, FooterInfo, FooterWrapper,} from './Footer.styled';

import {SocialContacts} from '../../components/SocialContacts';
import {Title2} from '../../components';

export const Footer = () => {
    return (
        <FooterWrapper id='Contact'>
            <Container>
                <FooterContainer>
                    <Title2>You can find me here:</Title2>
                    <FooterContacts>
                        <SocialContacts iconSize="60px"/>
                    </FooterContacts>
                    <FooterInfo>© 2023. All Rights Reserved.</FooterInfo>
                </FooterContainer>
            </Container>
        </FooterWrapper>
    );
};

