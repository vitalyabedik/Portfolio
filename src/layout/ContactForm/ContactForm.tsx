import React from 'react';

import {Container} from '../../App.styled';
import {
    ContactFormContainer, ContactFormWrapper, Form,
    FormInput, MessageField,
} from './ContactForm.styled';

import {Title2} from '../../components';
import {Button} from '../../components/Button';

export const ContactForm = () => {
    return (
        <ContactFormWrapper id="Contact">
            <Container>
                <ContactFormContainer>
                    <Title2>Contacts</Title2>
                    <Form>
                        <FormInput placeholder="Name"/>
                        <FormInput placeholder="Email" type="email"/>
                        <MessageField placeholder="Message"/>
                    </Form>
                    <Button type="submit" value="Send Message">Send Message</Button>
                </ContactFormContainer>
            </Container>
        </ContactFormWrapper>
    );
};

