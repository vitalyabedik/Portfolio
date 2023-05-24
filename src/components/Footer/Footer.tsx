import React from 'react';

import {FooterContact, FooterContacts, FooterContainer, FooterInfo, FooterTitle, FooterWrapper,} from './Footer.styled';
import {Container} from '../../assets/styles/Container.styled';

export const Footer = () => {

    return (
        <FooterWrapper>
            <Container flexDirection="column">
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

