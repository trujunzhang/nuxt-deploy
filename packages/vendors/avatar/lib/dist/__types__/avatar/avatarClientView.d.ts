import * as React from 'react';
import { IAvatarProps, IAvatarState } from './iAvatar';
export interface IAvatarClientViewProps extends IAvatarProps, IAvatarState {
}
export declare class AvatarClientView extends React.Component<IAvatarClientViewProps, {}> {
    constructor(props: IAvatarClientViewProps);
    getImageSrc(imageSrc: string): any;
    renderAsImage(styles: any, imageSrc: string, width: number): JSX.Element | null;
    renderAsText(styles: any, width: number): JSX.Element | null;
    scaleTextNode: (node: any) => void;
    render(): JSX.Element | null;
    getChildren(styles: any, src: any, width: number): JSX.Element | null;
}
