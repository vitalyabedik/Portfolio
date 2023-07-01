import React from 'react';
import { IconContext } from 'react-icons';
import { IconType } from 'react-icons';

type PropsType = {
    icon: IconType | string;
    size: string;
    color: string;
};

export const Icon: React.FC<PropsType> = ({ icon, size, color }) => {
    const IconComponent = icon;

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent />
        </IconContext.Provider>
    );
};

