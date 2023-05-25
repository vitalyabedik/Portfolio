import styled from 'styled-components';

type PropsType = {
    justifyContent?: string
    flexDirection? : string
    margin? : string
}

export const Container = styled.div<PropsType>`
  width: 80%;
  margin: auto;
  border: 1px solid;
  
  @media (max-width: 576px) {
    width: 100%;
  }
`





