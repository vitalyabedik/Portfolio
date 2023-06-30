import React from 'react';

import {Container} from '../../App.styled';
import {FooterContact, FooterContacts, FooterContainer, FooterInfo, FooterTitle, FooterWrapper,} from './Footer.styled';


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContainer>
                    <FooterTitle>Vitali Bedik</FooterTitle>
                    <FooterContacts>
                        <FooterContact></FooterContact>
                        <FooterContact></FooterContact>
                        <FooterContact></FooterContact>
                        <FooterContact></FooterContact>
                    </FooterContacts>
                    <FooterInfo>© 2023. All Rights Reserved.</FooterInfo>
                </FooterContainer>
            </Container>
        </FooterWrapper>
    );
};

