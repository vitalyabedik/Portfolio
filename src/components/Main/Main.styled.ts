import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #FFD4F0;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`

export const MainContainer = styled.div`
  //height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 40px;
  }
`

export const Greeting = styled.div`
  width: 300px;
  background-color: #F7F7F7;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding: 0 10px;
    text-align: left;
  }
`

export const Photo = styled.div`
  width: 300px;
  height: 400px;
  background-color: #F7F7F7;
`