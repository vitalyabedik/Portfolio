import React, {useContext} from 'react';

import {Project} from './Project';
import {ProjectListElement, ProjectsList, ProjectsWrapper} from './Projects.styled';
import {Container} from '../../App.styled';
import {ProjectsContext} from '../../context';
import {Title2} from '../../components';

export const Projects = () => {
    const projects = useContext(ProjectsContext);

    return (
        <ProjectsWrapper>
            <Container>
                <Title2 id="Portfolio">Projects</Title2>
                <ProjectsList>
                    {
                        projects.map((project, id) => {
                            return (
                                <ProjectListElement key={id}>
                                    <Project title={project.title}
                                             demoUrl={project.demoUrl}
                                             githubUrl={project.githubUrl}
                                             image={project.image}
                                             description={project.description}
                                             technologies={project.technologies}
                                             badge={project.badge}
                                    />
                                </ProjectListElement>
                            )
                        })
                    }
                </ProjectsList>
            </Container>
        </ProjectsWrapper>
    );
};

