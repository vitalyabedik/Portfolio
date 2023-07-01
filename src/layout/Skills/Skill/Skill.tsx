import React from 'react';
import {IconType} from 'react-icons';

import {SkillContainer} from './Skill.styled';

import {Icon} from '../../../components/Icon';
import {Title3} from '../../../components';

type PropsType = {
    title: string
    icon: IconType;
    size: string;
    color: string;
}

export const Skill: React.FC<PropsType> = (props) => {
    const { title, icon, size, color } = props;

    return (
        <SkillContainer>
            <Icon icon={icon} color={color} size={size}/>
            <Title3>{title}</Title3>
        </SkillContainer>
    );
};


