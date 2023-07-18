import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgb(0 0 0 /74%);
  z-index: 100;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
  
`