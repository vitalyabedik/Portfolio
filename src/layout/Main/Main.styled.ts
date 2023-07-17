import styled from 'styled-components';

import me from '../../assets/images/myPhoto.png'


export const MainWrapper = styled.section`
  @media (max-width: 768px) {
    padding-top: 0;
  }
`

export const MainContainer = styled.div`
  background-image: url(${me});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: black;
  
  @media (max-width: 1200px) {
    background-position-x: 70%;
  }

  @media (max-width: 992px) {
    background-position-x: 80%;
  }


  @media (max-width: 576px) {
    background-size: cover;
    background-position-x: 77%;
  }
`

export const MainInfo = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding-top: 150px;
  
  @media (max-width: 1200px) {
    padding-top: 70px;
  }

  @media (max-width: 976px) {
    padding-top: 100px;
  }
`


export const Greeting = styled.div`
  width: 100%;
  
  @media (max-width: 360px) {
    width: 100%;
    padding: 0 10px;
    text-align: center;;
  }

  @media (max-width: 576px) {
    position: absolute;
    bottom: -250px;
    text-align: center;
  }
`

export const GreetingTitle = styled.h1`
  padding-top: 120px;
  font-family: Roboto;
  color: #fff;
  font-size: 5.6rem;
  line-height: 6.4rem;
  letter-spacing: .15em;
  font-weight: 300;



  @media (max-width: 976px) {
    padding-top: 150px;
    font-size: 3.8rem;
    line-height: 5.4rem;
  }
  

  @media (max-width: 768px) {
    font-size: 3.8rem;
    line-height: 5.4rem;
  }

  @media (max-width: 576px) {
    padding-top: 20px;
    font-size: 3rem;
    line-height: 3.8rem;
  }
`

export const InfoText = styled.div`
  color: #fff;
  font-size: 2.4rem;
  line-height: 3.2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
    text-align: left;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: left;

    position: absolute;
    bottom: 0px;
  }
`
