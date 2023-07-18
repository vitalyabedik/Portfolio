import styled from 'styled-components';
import {Link} from 'react-scroll';

export const NavList = styled.ul`
  display: flex;

  @media (max-width: 360px) {
    width: 100%;
    margin: 0 10px;
  }
`

export const NavItem = styled.li`
  & > :not(:last-child) {
    margin-right: 80px;
  }

  @media (max-width: 768px) {
    & > :not(:last-child) {
      margin-right: 60px;
    }
  }
  
  @media (max-width: 576px) {
    & > :not(:last-child) {
      margin-right: 30px;
    }
  }
`

export const NavLinkItem = styled(Link)`
  font-size: 2rem;
  line-height: 2.8rem;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #4bffa5;
    //opacity: .4;
  }
  
  &:hover {
    //opacity: .65;
    color: #4bffa5
  }
`



