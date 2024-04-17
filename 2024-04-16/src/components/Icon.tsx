import type {FC, CSSProperties} from 'react';

export type IconProps = {
    name: string;
    style: CSSProperties;
};

export const Icon: FC<IconProps> = props => {
    return <span className="material-icons"/>
}