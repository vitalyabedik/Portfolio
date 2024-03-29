import React, {useContext} from 'react';
import {Fade} from 'react-awesome-reveal';

import {Container} from '../../App.styled';
import {SkillsList, SkillsWrapper} from './Skills.styled';

import {Skill} from './Skill';
import {SkillsContext} from '../../context';
import {Title2} from '../../components';

export const Skills = () => {
    const skills = useContext(SkillsContext);

    const skillsList = skills.map((skill, id) => (
        <Skill
            key={id}
            title={skill.title}
            icon={skill.icon}
            color={skill.color}
            size="80px"
        />
    ));

    return (
        <SkillsWrapper id="Skills">
            <Fade cascade={true} damping={1} delay={300} triggerOnce={true}>
                <Container>
                    <Title2>Skills</Title2>
                    <SkillsList>
                        {skillsList}
                    </SkillsList>
                </Container>
            </Fade>
        </SkillsWrapper>
    );
};
