import React from 'react';

import {NavList} from './Nav.styled';

export const Nav = () => {
    return (
        <nav>
            <NavList>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </NavList>
        </nav>
    );
};

