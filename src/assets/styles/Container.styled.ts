import styled from 'styled-components';

type PropsType = {
    justifyContent?: string
    flexDirection? : string
}

export const Container = styled.div<PropsType>`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  border: 1px solid;
`