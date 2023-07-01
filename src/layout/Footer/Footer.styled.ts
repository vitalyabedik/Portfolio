import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  //height: 100vh;
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
  //background-color: #9e9ea2;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.8rem;
  color: #fff;
`

export const FooterContacts = styled.ul`
  //background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 360px;
  border: 1px solid;
`

export const FooterInfo = styled.h3`
  //background-color: #9e9ea2;
  
  height: 100%;
  color: #BBBBBB;
  font-size: 1.6rem;
  font-weight: 400;
  height: 24px;
  letter-spacing: normal;
  line-height: 2.4rem;
`



