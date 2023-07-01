import React from 'react';

import {Container} from '../../App.styled';
import {FooterContacts, FooterContainer, FooterInfo, FooterTitle, FooterWrapper,} from './Footer.styled';
import  {SocialContacts} from '../../components/SocialContacts';


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContainer>
                    <FooterTitle>You can find me here:</FooterTitle>
                    <FooterContacts>
                        <SocialContacts iconSize="60px" />
                    </FooterContacts>
                    <FooterInfo>© 2023. All Rights Reserved.</FooterInfo>
                </FooterContainer>
            </Container>
        </FooterWrapper>
    );
};

