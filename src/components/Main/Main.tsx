import React from 'react';

import styles from './Main.module.css'
import stylesContainer from '../../assets/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I am Vitali Bedik</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

