import React from 'react';

import { useTheme } from 'styled-components';
import {
    RiGithubFill, RiLinkedinBoxFill, RiTelegramFill
} from 'react-icons/ri';
import {Icon} from '../Icon';
import {IconLink} from './SocialContacts.styled';


type SocialLinksPropsType = {
    iconSize: string
}

export const SocialContacts: React.FC<SocialLinksPropsType> = ({ iconSize }) => {
    const theme = useTheme();

    return (
        <>
            <IconLink href="https://github.com/vitalyabedik" target="_blank">
                <Icon
                    icon={RiGithubFill}
                    size={iconSize}
                    // color={theme?.colors.primaryLight}
                    color={'#fff'}
                />
            </IconLink>
            <IconLink
                href="https://www.linkedin.com/in/vitalyabedik/"
                target="_blank"
            >
                <Icon
                    icon={RiLinkedinBoxFill}
                    size={iconSize}
                    // color={theme?.colors.primaryLight}
                    color={'#fff'}
                />
            </IconLink>
            <IconLink href="https://t.me/vitalibedik" target="_blank">
                <Icon
                    icon={RiTelegramFill}
                    size={iconSize}
                    // color={theme?.colors.primaryLight}
                    color={'#fff'}
                />
            </IconLink>
        </>
    );
};

