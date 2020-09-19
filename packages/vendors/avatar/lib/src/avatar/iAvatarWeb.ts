import { IAvatarProps } from './iAvatar'

export interface IAvatarRenderWebContainerProps extends IAvatarProps {
  children?: any
  classNames: string // ClassName for container. Like for 'div'
  onClick?: () => any
  hostStyle: any
}

export interface IAvatarRenderWebImageViewProps extends IAvatarProps {
  imageStyle: any
  imageClassName?: string // ClassName for image.
  imageSrc: string
  alt: any
  onError?: any
}

export interface IAvatarRenderWebTextViewProps extends IAvatarProps {
  className: string
  textClassName?: string // ClassName for text.
  initialsStyle: any | null
  tableStyle: any
  spanStyle: any
  scaleTextNode: (node: any) => any
  spanKey: string
  textValue?: string | null
}
