import React from 'react';

import {Project} from './Project';
import {ProjectsBlock, ProjectsContainer, ProjectsTitle} from './Projects.styled';
import {Container} from '../../assets/styles/Container.styled';

export const Projects = () => {
    const projectDescription = `Project description`
    const projectImage = `Project description`

    return (
        <ProjectsContainer>
            <Container flexDirection='column' >
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsBlock>
                    <Project title="Project name" description={projectDescription} image={projectImage}/>
                    <Project title="Project name" description={projectDescription} image={projectImage}/>
                </ProjectsBlock>
            </Container>
        </ProjectsContainer>
    );
};

