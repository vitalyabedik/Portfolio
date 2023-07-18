import React from 'react';

import {
    ProjectContainer, ProjectDescription, ProjectHeader,
    ProjectImage, ProjectInfo, ProjectLink, ProjectLinks, ProjectMainInfo,
    ProjectStack, ProjectStackItem,
} from './Project.styled';

import {Badge, Title3} from '../../../components';
import {ProjectType} from '../../../data';
import {Icon} from '../../../components/Icon';
import {RiGithubFill} from 'react-icons/ri';
import {BiLinkExternal} from 'react-icons/bi';
import {Fade} from 'react-awesome-reveal';

export const Project: React.FC<ProjectType> = (props) => {
    const {
        title,
        demoUrl,
        githubUrl,
        image,
        description,
        technologies,
        badge
    } = props

    return (
        <Fade direction={'up'} delay={300}>
            <ProjectContainer>
                <ProjectImage backgroundimage={image}/>
                <ProjectMainInfo>
                    <ProjectInfo>
                        <ProjectHeader>
                            <Title3>{title}</Title3>
                            <Badge>{badge}</Badge>
                        </ProjectHeader>
                        <ProjectStack>
                            {
                                technologies.map((technology, id) => {
                                    return (
                                        <ProjectStackItem key={id}>{technology}</ProjectStackItem>
                                    )
                                })
                            }
                        </ProjectStack>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectLinks>
                            <ProjectLink href={demoUrl} target="_blank">
                                <Icon icon={BiLinkExternal} size={'24px'} color={'white'}/>
                            </ProjectLink>
                            <ProjectLink href={githubUrl} target="_blank">
                                <Icon icon={RiGithubFill} size={'24px'} color={'white'}/>
                            </ProjectLink>
                        </ProjectLinks>
                    </ProjectInfo>
                </ProjectMainInfo>
            </ProjectContainer>
        </Fade>
    );
};

