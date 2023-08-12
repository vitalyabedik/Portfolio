import React from 'react';

import {Container} from '../../App.styled';
import {
    ButtonWrapper,
    ContactFormContainer, ContactFormWrapper, Form,
    FormInput, MessageField,
} from './ContactForm.styled';

import {Title2} from '../../components';
import {Button} from '../../components/Button';
import {useLogin} from '../../hooks/useLogin';

export const ContactForm = () => {
    const {formik} = useLogin()

    return (
        <ContactFormWrapper id="Contact">
            <Container>
                <ContactFormContainer>
                    <Title2>Contacts</Title2>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormInput placeholder="Name" {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name &&
                            <div style={{color: 'red'}}>{formik.errors.name}</div>}
                        <FormInput placeholder="Email" type="email" {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email &&
                            <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        <MessageField placeholder="Message" {...formik.getFieldProps('message')}/>
                        {formik.touched.message && formik.errors.message &&
                            <div style={{color: 'red'}}>{formik.errors.message}</div>}
                        <ButtonWrapper>
                            <Button disabled={!formik.isValid} type="submit">Send Message</Button>
                        </ButtonWrapper>
                    </Form>
                </ContactFormContainer>
            </Container>
        </ContactFormWrapper>
    );
};

