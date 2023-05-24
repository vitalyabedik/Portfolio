import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
  //height: 100vh;
  background-color: #4eb68b;
  padding: 100px 0;
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactFormTitle = styled.h2`
  background-color: #9e9ea2;
  margin-bottom: 50px;
`

export const Form = styled.form`
  background-color: #FFFFFFFF;
  width: 360px;
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

