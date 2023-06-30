import React, {useContext} from 'react';

import {Container} from '../../App.styled';
import {SkillsList, SkillsTitle, SkillsWrapper} from './Skills.styled';

import {Skill} from './Skill';
import {SkillsContext} from '../../context';

export const Skills = () => {
    const skills = useContext(SkillsContext);

    const skillsList = skills.map((skill, id) => (
        <Skill
            key={id}
            title={skill.title}
            icon={skill.icon}
            color={skill.color}
            size="10rem"
        />
    ));

    return (
        <SkillsWrapper>
            <Container>
                <SkillsTitle id="Skills">Skills</SkillsTitle>
                <SkillsList>
                    {skillsList}
                </SkillsList>
            </Container>
        </SkillsWrapper>
    );
};








// export const Skills = () => {
//     const skills = useContext(SkillsContext);
//
//     const skillsList = skills.map((skill, id) => (
//         <Skill
//             key={id}
//             title={skill.title}
//             icon={skill.icon}
//             color={skill.color}
//             size="10rem"
//         />
//     ));
//
//     const testDescription =
//         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus tellus.
//         Integer faucibus auctor tellus, ac porttitor dui dictum quis. Curabitur eget porta sapien, eu auctor urna
//         `
//
//     return (
//         <SkillsWrapper>
//             <Container>
//                 <SkillsTitle id="Skills">Skills</SkillsTitle>
//                 <SkillsList>
//                     <li><Skill title="JS" description={testDescription} icon=""/></li>
//                     <li><Skill title="HTML" description={testDescription} icon=""/></li>
//                     <li><Skill title="CSS" description={testDescription} icon=""/></li>
//                 </SkillsList>
//             </Container>
//         </SkillsWrapper>
//     );
// };