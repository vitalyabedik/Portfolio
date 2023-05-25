import React from 'react';

import {Skill} from './Skill';
import {SkillsList, SkillsTitle, SkillsWrapper} from './Skills.styled';
import {Container} from '../App.styled';

export const Skills = () => {
    const testDescription =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus tellus. 
        Integer faucibus auctor tellus, ac porttitor dui dictum quis. Curabitur eget porta sapien, eu auctor urna
        `

    return (
        <SkillsWrapper>
            <Container>
                <SkillsTitle id="Skills">Skills</SkillsTitle>
                <SkillsList>
                    <li><Skill title="JS" description={testDescription} icon=""/></li>
                    <li><Skill title="HTML" description={testDescription} icon=""/></li>
                    <li><Skill title="CSS" description={testDescription} icon=""/></li>
                </SkillsList>
            </Container>
        </SkillsWrapper>
    );
};

