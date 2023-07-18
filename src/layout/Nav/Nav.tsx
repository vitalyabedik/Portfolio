import React from 'react';

import {NavItem, NavLinkItem, NavList} from './Nav.styled';

export const Nav = () => {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <NavLinkItem
                    activeClass="active"
                              to="Home"
                              spy={true}
                              smooth={true}
                              offset={1}
                              duration={500}
                     >
                            Home
                    </NavLinkItem>
                    <NavLinkItem
                        activeClass="active"
                              to="Skills"
                              spy={true}
                              smooth={true}
                              offset={1}
                              duration={500}
                        >
                            Skills
                    </NavLinkItem>
                    <NavLinkItem
                        activeClass="active"
                              to="Portfolio"
                              spy={true}
                              smooth={true}
                              offset={1}
                              duration={500}
                        >
                            Portfolio
                    </NavLinkItem>
                    <NavLinkItem
                        activeClass="active"
                              to="Contact"
                              spy={true}
                              smooth={true}
                              offset={1}
                              duration={500}
                        >
                            Contact
                    </NavLinkItem>



                {/*    <NavLinkItem href="#Home">*/}
                {/*        <span>Home</span>*/}
                {/*    </NavLinkItem>*/}
                {/*</NavItem>*/}
                {/*<NavItem>*/}
                {/*    <NavLinkItem href="#Skills">*/}
                {/*        <span>Skills</span>*/}
                {/*    </NavLinkItem>*/}
                {/*</NavItem>*/}
                {/*<NavItem>*/}
                {/*    <NavLinkItem href="#Portfolio">*/}
                {/*        <span>Portfolio</span>*/}
                {/*    </NavLinkItem>*/}
                {/*</NavItem>*/}
                {/*<NavItem>*/}
                {/*    <NavLinkItem href="#Contact">*/}
                {/*        <span>Contact</span>*/}
                {/*    </NavLinkItem>*/}
                </NavItem>
            </NavList>
        </nav>
    );
};

