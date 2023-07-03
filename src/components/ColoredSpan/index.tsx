import React from 'react';

type PropsType = {
    text: string
    color: string
}

export const ColoredSpan: React.FC<PropsType> = (props) => {
    const {text, color = 'red'} = props

    return (
        <span>{text}</span>
    );
};

