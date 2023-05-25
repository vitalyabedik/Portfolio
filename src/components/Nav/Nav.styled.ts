import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
  border: 1px solid;

  @media (max-width: 360px) {
    width: 100%;
    margin: 0 10px;
  }
`

