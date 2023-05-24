import React from 'react';

import {NavContainer} from './Nav.styled';

export const Nav = () => {
    return (
        <NavContainer>
            <a href="#Home">Home</a>
            <a href="#Skills">Skills</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Contact</a>
        </NavContainer>
    );
};

