import React from 'react';

import {SkillContainer, SkillDescription, SkillIcon, SkillTitle} from './Skill.styled';

type PropsType = {
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <SkillContainer>
            <SkillIcon>{icon}</SkillIcon>
            <SkillTitle>{title}</SkillTitle>
            <SkillDescription>{description}</SkillDescription>
        </SkillContainer>
    );
};

