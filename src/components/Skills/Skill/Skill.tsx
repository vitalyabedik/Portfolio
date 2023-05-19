import React from 'react';

import styles from './Skill.module.css'

type PropsType = {
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

