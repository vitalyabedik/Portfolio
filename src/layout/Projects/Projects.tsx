import React from 'react';

import {Project} from './Project';
import {ProjectListElement, ProjectsList, ProjectsTitle, ProjectsWrapper} from './Projects.styled';
import {Container} from '../../App.styled';

export const Projects = () => {
    const projectDescription = `Project description`
    const projectImage = `Project description`

    return (
        <ProjectsWrapper>
            <Container>
                <ProjectsTitle id="Portfolio">Projects</ProjectsTitle>
                <ProjectsList>
                    <ProjectListElement>
                        <Project title="Project name" description={projectDescription} image={projectImage}/>
                    </ProjectListElement>
                    <ProjectListElement>
                        <Project title="Project name" description={projectDescription} image={projectImage}/>
                    </ProjectListElement>
                </ProjectsList>
            </Container>
        </ProjectsWrapper>
    );
};

