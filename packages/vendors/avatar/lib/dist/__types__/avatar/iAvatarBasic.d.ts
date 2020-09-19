import { IAvatarRenderClientContainerProps, IAvatarRenderClientImageViewProps, IAvatarRenderClientTextViewProps } from './iAvatarClient';
import { IAvatarRenderWebContainerProps, IAvatarRenderWebImageViewProps, IAvatarRenderWebTextViewProps } from './iAvatarWeb';
export interface IAvatarBaseWebRenderProps {
    renderWebContainerView?: (renderWebContainerProps: IAvatarRenderWebContainerProps) => JSX.Element;
    renderWebImageView?: (renderWebImageViewProps: IAvatarRenderWebImageViewProps) => JSX.Element;
    renderWebTextView?: (renderWebTextViewProps: IAvatarRenderWebTextViewProps) => JSX.Element;
}
export interface IAvatarBaseClientRenderProps {
    renderClientContainerView?: (renderClientContainerProps: IAvatarRenderClientContainerProps) => JSX.Element;
    renderClientImageView?: (renderClientImageViewProps: IAvatarRenderClientImageViewProps) => JSX.Element;
    renderClientTextView?: (renderClientTextViewProps: IAvatarRenderClientTextViewProps) => JSX.Element;
}
export interface IAvatarBaseClassNameProps {
    className?: string;
    imageClassName?: string;
    textClassName?: string;
}
export interface IAvatarBaseStyleProps {
    style?: any;
    containerStyle?: any;
    avatarStyle?: any;
    titleStyle?: any;
}
