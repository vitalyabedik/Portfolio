import React from 'react';

import {FooterContact, FooterContacts, FooterContainer, FooterInfo, FooterTitle,} from './Footer.styled';
import {Container} from '../../assets/styles/Container.styled';

export const Footer = () => {

    return (
        <FooterContainer>
            <Container flexDirection="column">
                <FooterTitle>Vitali Bedik</FooterTitle>
                <FooterContacts>
                    <FooterContact></FooterContact>
                    <FooterContact></FooterContact>
                    <FooterContact></FooterContact>
                    <FooterContact></FooterContact>
                </FooterContacts>
                <FooterInfo>© 2023. All Rights Reserved.</FooterInfo>
            </Container>
        </FooterContainer>
    );
};

