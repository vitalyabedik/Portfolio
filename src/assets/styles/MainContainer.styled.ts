import styled from 'styled-components';

type PropsType = {
    justifyContent: string
}

export const MainContainer = styled.div<PropsType>`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  border: 1px solid;
`