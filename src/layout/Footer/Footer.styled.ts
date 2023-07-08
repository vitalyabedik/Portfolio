import styled from 'styled-components';

export const FooterWrapper = styled.footer`
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

export const FooterContacts = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 360px;
  border: 1px solid;
`

export const FooterInfo = styled.h3`
  height: 24px;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 2.4rem;
  color: #BBBBBB;
`



