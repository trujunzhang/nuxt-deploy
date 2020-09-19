import { IAvatarBaseWebRenderProps, IAvatarBaseClientRenderProps, IAvatarBaseStyleProps, IAvatarBaseClassNameProps } from './iAvatarBasic';
import { IAvatarOnlyClientProps } from './iAvatarCommon';
import { IAvatarSourceProps } from './iAvatarSource';
export interface IAvatarURISource {
    uri: string;
}
export declare type AvatarURISourceWithNull = IAvatarURISource | null;
export interface IAvatarProps extends IAvatarSourceProps, IAvatarBaseClassNameProps, IAvatarBaseWebRenderProps, IAvatarBaseClientRenderProps, IAvatarBaseStyleProps, IAvatarOnlyClientProps {
    fgColor?: string;
    round?: boolean | string;
    size?: number;
    textSizeRatio?: number;
    unstyled?: boolean;
    onClick?: () => any;
}
export interface IAvatarDefaultProps {
    className: string;
    fgColor: string;
    round: boolean | string;
    size: number;
    textSizeRatio: number;
    unstyled: boolean;
}
export interface IAvatarState {
    internal: any;
    src?: string | null;
    value?: string | null;
    color?: string;
    sourceName?: any;
}
export declare type AvatarPropsWithDefaults = IAvatarProps & IAvatarDefaultProps;
