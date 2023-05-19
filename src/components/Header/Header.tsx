import React from 'react';

import styles from './Header.module.css'

import {Nav} from '../Nav';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    );
};

