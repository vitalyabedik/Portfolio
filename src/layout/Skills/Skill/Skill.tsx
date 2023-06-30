import React from 'react';
import {IconType} from 'react-icons';

import {SkillContainer, SkillTitle} from './Skill.styled';

import {Icon} from '../../../components/Icon';

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
            <SkillTitle>{title}</SkillTitle>
        </SkillContainer>
    );
};



// import React from 'react';
//
// import {SkillContainer, SkillDescription, SkillIcon, SkillTitle} from './Skill.styled';
//
// type PropsType = {
//     icon: string
//     title: string
//     description: string
// }
//
// export const Skill: React.FC<PropsType> = ({icon, title, description}) => {
//     return (
//         <SkillContainer>
//             <SkillIcon>{icon}</SkillIcon>
//             <SkillTitle>{title}</SkillTitle>
//             <SkillDescription>{description}</SkillDescription>
//         </SkillContainer>
//     );
// };

