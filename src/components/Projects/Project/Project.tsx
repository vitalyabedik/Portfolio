import React from 'react';

import {
    ProjectContainer,
    ProjectDescription,
    ProjectImage,
    ProjectInfo,
    ProjectLink,
    ProjectTitle
} from './Project.styled';

type PropsType = {
    image: string
    title: string
    description: string
}

export const Project: React.FC<PropsType> = ({image, title, description}) => {
    return (
        <ProjectContainer>
            <ProjectImage backgroundImage={image}>
                {/*{image}*/}
                <ProjectLink>See project</ProjectLink>
            </ProjectImage>
            <ProjectInfo>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
            </ProjectInfo>
        </ProjectContainer>
    );
};

