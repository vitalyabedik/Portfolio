import React from 'react';

import {Skill} from './Skill';
import {SkillsBlock, SkillsTitle, SkillsWrapper} from './Skills.styled';
import {Container} from '../../assets/styles/Container.styled';

export const Skills = () => {
    const testDescription =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus tellus. 
        Integer faucibus auctor tellus, ac porttitor dui dictum quis. Curabitur eget porta sapien, eu auctor urna
        `

    return (
        <SkillsWrapper>
            <Container>
                    <SkillsTitle>Skills</SkillsTitle>
                    <SkillsBlock>
                        <Skill title="JS" description={testDescription} icon=""/>
                        <Skill title="HTML" description={testDescription} icon=""/>
                        <Skill title="CSS" description={testDescription} icon=""/>
                    </SkillsBlock>
            </Container>
        </SkillsWrapper>
    );
};

