import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`

export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`