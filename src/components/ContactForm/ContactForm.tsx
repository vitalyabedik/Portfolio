import React from 'react';

import {
    ContactFormContainer,
    ContactFormTitle, ContactFormWrapper,
    EmailField,
    Form,
    MessageField,
    NameField,
    SubmitButton
} from './ContactForm.styled';
import {Container} from '../../assets/styles/Container.styled';

export const ContactForm = () => {

    return (
        <ContactFormWrapper>
            <Container>
                <ContactFormContainer>
                    <ContactFormTitle id="Contact">Contacts</ContactFormTitle>
                    <Form>
                        <NameField placeholder="Your name"/>
                        <EmailField placeholder="Your email" type="email"/>
                        <MessageField placeholder="Your message"/>
                    </Form>
                    <SubmitButton type="submit" value="Submit"/>
                </ContactFormContainer>
            </Container>
        </ContactFormWrapper>
    );
};

