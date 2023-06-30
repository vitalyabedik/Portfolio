import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;

  @media (max-width: 360px) {
    width: 100%;
    margin: 0 10px;
  }
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 80px;
  }
`

export const NavLinkItem = styled.a`
  font-size: 16px;
  line-height: 2.5;
  color: #fff;
  font-weight: 600;
  opacity: .65;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`

