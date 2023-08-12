import styled from 'styled-components';

export const ContactFormWrapper = styled.section`
  padding: 130px 0;
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 700px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 50px 0;
  
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
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
  border-bottom: 1px solid rgba(255,255,255,.5);
  resize: none;
  outline: 0;
  border-radius: 0;
  
  &:focus-visible {
    border-color: #4bffa5;
  }
  
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
  border-bottom: 1px solid rgba(255,255,255,.5);
  resize: none;
  outline: 0;
  border-radius: 0;

  &:focus-visible {
    border-color: #4bffa5;
  }
`


