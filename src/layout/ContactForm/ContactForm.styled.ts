import styled from 'styled-components';

export const ContactFormWrapper = styled.section`
  //height: 100vh;
  padding: 100px 0;
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 50px 0;
`


export const FormInput = styled.input`
  width: 100%;
  display: block;
  font-size: 1.6rem;
  height: 50px;
  width: 100%;
  color: #eee;
  padding: 0;
  background: 0 0;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,.1);
  resize: none;
  outline: 0;
  border-radius: 0;
  
  &:active {
    border-color: #4bffa5;
  }
  
`

export const EmailField = styled.input`
  width: 100%;
`

export const MessageField = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  
  display: block;
  font-size: 1.6rem;
  height: 120px;
  width: 100%;
  color: #eee;
  padding: 0;
  background: 0 0;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,.1);
  resize: none;
  outline: 0;
  border-radius: 0;
  
  &:active {
    border-color: #4bffa5;
  }
`


