import styled, { keyframes } from 'styled-components';

// import me from '../../assets/images/myPhoto.png'

export const MainWrapper = styled.section`
  background-color: #FFD4F0;
  padding: 100px 0;

  //margin-left: -50vw;
  //position: absolute !important;
  //top: 0;
  //left: 50%;
  //width: 100vw;
  //height: 100%;
  //background-repeat: no-repeat;
  //background-position: center center;
  //background-size: cover;

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
  //width: 300px;
  //background-color: #F7F7F7;

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

// The typing effect animation
const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

// The typewriter cursor effect animation
const blinkCaretAnimation = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }
`;

export const GreetingTitle = styled.h1`
  //display: inline;
  //font-family: Roboto;
  //font-size: 28px;
  //font-weight: 300;
  //height: auto;
  //letter-spacing: normal;
  //line-height: 44px;
  //overflow-wrap: break-word;
  //text-align: left;
  //text-rendering: optimizelegibility;
  //width: auto;
  //word-break: break-word;
  //-webkit-font-smoothing: antialiased;
  font-family: Roboto;
  color: #fff;
  margin: 12% 0 0 45%;
  font-size: 28px;
  overflow: hidden;
  letter-spacing: .15em;
  max-width: 780px;
  position: relative;
  font-weight: 300;
  
  &::after {
    content: '';
    border-right: 0.15em solid orange;
    animation: ${typingAnimation} 1s steps(40, end), ${blinkCaretAnimation} 0.75s step-end infinite;
  }
`


// Styled component for typing effect
export const TypingEffect = styled.span`
  overflow: hidden;
  border-right: 0.15em solid orange; /* Change the border style as needed */
  white-space: nowrap;
  animation: ${typingAnimation} 1s steps(40, end), ${blinkCaretAnimation} 0.75s step-end infinite;
`;

// Usage: <TypingEffect>Hello, world!</TypingEffect>

export const Photo = styled.div`
  width: 300px;
  height: 400px;
  background-color: #F7F7F7;
 
`