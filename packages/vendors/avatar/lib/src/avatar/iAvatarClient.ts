import { IAvatarProps } from './iAvatar'

export interface IAvatarRenderClientContainerProps extends IAvatarProps {
  children?: any
  styles: any
  round?: boolean | string
  width: number
  containerStyle: any
}

export interface IAvatarRenderClientImageViewProps extends IAvatarProps {
  styles: any
  round?: boolean | string
  width: number
  avatarStyle: any
  imageSrc: any
  onError?: any
}

export interface IAvatarRenderClientTextViewProps extends IAvatarProps {
  styles: any
  round?: boolean | string
  width: number
  titleContainerStyle: any
  titleStyle: any
  textValue: string
}
