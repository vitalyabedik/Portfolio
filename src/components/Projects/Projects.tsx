import React from 'react';

import {Project} from './Project';
import {ProjectsBlock, ProjectsTitle, ProjectsWrapper} from './Projects.styled';
import {Container} from '../../assets/styles/Container.styled';

export const Projects = () => {
    const projectDescription = `Project description`
    const projectImage = `Project description`

    return (
        <ProjectsWrapper>
            <Container>
                <ProjectsTitle id="Portfolio">Projects</ProjectsTitle>
                <ProjectsBlock>
                    <Project title="Project name" description={projectDescription} image={projectImage}/>
                    <Project title="Project name" description={projectDescription} image={projectImage}/>
                </ProjectsBlock>
            </Container>
        </ProjectsWrapper>
    );
};

