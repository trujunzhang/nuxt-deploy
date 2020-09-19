import * as React from 'react';
import { IAvatarProps, IAvatarState } from './iAvatar';
export interface IAvatarRenderWebProps extends IAvatarProps {
    imageSrc?: string | null;
    initialsStyle: any;
    tableStyle: any;
    spanStyle: any;
}
interface IAvatarWebViewProps extends IAvatarProps, IAvatarState {
}
export declare class AvatarWebView extends React.Component<IAvatarWebViewProps, {}> {
    constructor(props: IAvatarWebViewProps);
    scaleTextNode: (node: any) => void;
    renderAsImage(imageSrc: string): JSX.Element | null;
    renderAsText(): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
