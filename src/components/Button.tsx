import React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    color?: string;
    style?: Object;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;
    const _style: React.CSSProperties = style || {};

    // Override
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return <button style={_style}>{children}</button>;
};
