import React from 'react';
import * as S from './Button.styled';

type DefaultButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonType & {
    children: React.ReactNode
    callback?: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const {callback, children, ...restProps} = props

    const onClickHandler = () => {
        callback && callback()
    }

    return (
        <S.Button onClick={onClickHandler} {...restProps}>
            {children}
        </S.Button>
    );
};

