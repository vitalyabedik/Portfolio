import React from 'react';

import {NavItem, NavLinkItem, NavList} from './Nav.styled';

export const Nav = () => {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <NavLinkItem href="#Home">
                        <span>Home</span>
                    </NavLinkItem>
                </NavItem>
                <NavItem>
                    <NavLinkItem href="#Skills">
                        <span>Skills</span>
                    </NavLinkItem>
                </NavItem>
                <NavItem>
                    <NavLinkItem href="#Portfolio">
                        <span>Portfolio</span>
                    </NavLinkItem>
                </NavItem>
                <NavItem>
                    <NavLinkItem href="#Contact">
                        <span>Contact</span>
                    </NavLinkItem>
                </NavItem>
            </NavList>
        </nav>
    );
};

