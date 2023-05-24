import styled from 'styled-components';

export const FooterWrapper = styled.div`
  //height: 100vh;
  background-color: #aa779e;
  padding: 100px 0 20px;

  @media (max-width: 576px) {
    padding-bottom: 60px;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`

export const FooterTitle = styled.h2`
  background-color: #9e9ea2;
`

export const FooterContacts = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  height: 60px;
  width: 360px;
  border: 1px solid;
`

export const FooterContact = styled.div`
  background-color: bisque;
  height: 100%;
  width: 60px;
  border: 1px solid;
`

export const FooterInfo = styled.h3`
  background-color: #9e9ea2;
  height: 100%;
`



