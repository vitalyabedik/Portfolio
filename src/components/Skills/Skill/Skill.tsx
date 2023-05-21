import React from 'react';

import {SkillContainer, SkillDescription, SkillIcon} from './Skill.styled';

type PropsType = {
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <SkillContainer>
            <SkillIcon>{icon}</SkillIcon>
            <h3>{title}</h3>
            <SkillDescription>{description}</SkillDescription>
        </SkillContainer>
    );
};

