import * as React from 'react';
import { IAvatarProps, IAvatarState } from './iAvatar';
export declare class Avatar extends React.Component<IAvatarProps, IAvatarState> {
    private static defaultProps;
    constructor(props: IAvatarProps);
    componentDidMount(): void;
    componentWillReceiveProps(newProps: IAvatarProps): void;
    componentWillUnmount(): void;
    createFetcher: (internal: any) => (errEvent: any) => void;
    fetch: () => void;
    render(): JSX.Element | null;
}
