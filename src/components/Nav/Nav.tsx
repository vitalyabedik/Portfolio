import React from 'react';

import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </div>
    );
};

