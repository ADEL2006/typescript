import React, { FC } from 'react';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { WidthHeight } from './WidthHeight';
import type { LeftRightTopBottom } from './LeftRightTopBottom';

export type ReactDivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & LeftRightTopBottom & {
    src?:string
};

export const Div: FC<DivProps> = ({
    width, height, style: _style, src, className: _className, left, right, top, bottom, ...props
}) => {
    const style = {..._style, width, height, BackgroundImage: src && `url(${src})`, left, right, top, bottom};
    const className = ['box-border', src && 'bg-gray-300', _className].join(' ')
    return <div {...props} className = {className} style={style} />;
}
