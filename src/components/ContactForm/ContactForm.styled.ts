import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  //height: 100vh;
  background-color: #c3a0cc;
  padding: 100px 0;
`

export const ContactFormTitle = styled.h2`
  background-color: #9e9ea2;
  margin-bottom: 50px;
`

export const Form = styled.form`
  background-color: #FFFFFFFF;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid;
  margin-bottom: 50px;
`

export const NameField = styled.input`
  background-color: #9e9ea2;
  width: 100%;
`

export const EmailField = styled.input`
  background-color: #9e9ea2;
  width: 100%;
`

export const MessageField = styled.textarea`
  background-color: #9e9ea2;
  max-width: 100%;
  min-width: 100%;
`

export const SubmitButton = styled.input`
  padding: 5px 20px;
  background-color: #9e9ea2;
`

