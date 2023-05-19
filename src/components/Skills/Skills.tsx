import React from 'react';

import styles from './Skills.module.css'
import stylesContainer from '../../assets/styles/Container.module.css'
import {Skill} from './Skill';

export const Skills = () => {
    const testDescription =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus tellus. 
        Integer faucibus auctor tellus, ac porttitor dui dictum quis. Curabitur eget porta sapien, eu auctor urna
        `

    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title="JS" description={testDescription} icon=""/>
                    <Skill title="HTML" description={testDescription} icon=""/>
                    <Skill title="CSS" description={testDescription} icon=""/>
                </div>
            </div>
        </div>
    );
};

