import * as React from 'react'

import { AvatarUtils } from '@app/types'

import {
  Avatar,
  IAvatarProps,
  // For Client.
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps,
  // For Web.
  IAvatarRenderWebContainerProps,
  IAvatarRenderWebImageViewProps,
  IAvatarRenderWebTextViewProps
} from '@app/avatar'

interface IAppBaseAvatarProps {
  // For Client
  renderClientContainerView?: (renderClientContainerProps: IAvatarRenderClientContainerProps) => any
  renderClientImageView?: (renderClientImageViewProps: IAvatarRenderClientImageViewProps) => any
  renderClientTextView?: (renderClientTextViewProps: IAvatarRenderClientTextViewProps) => any
  // For Web
  renderWebContainerView?: (renderWebContainerProps: IAvatarRenderWebContainerProps) => any
  renderWebImageView?: (renderWebImageViewProps: IAvatarRenderWebImageViewProps) => any
  renderWebTextView?: (renderWebTextViewProps: IAvatarRenderWebTextViewProps) => any
  avatarType?: string
  forObject?: any
  className?: string
  size?: number
  round?: boolean
  alt?: string
  title?: string
  clientStaticImageSource?: any
  photoUrl: string | null
}

interface IAppBaseAvatarState {
  avatarProperty: IAvatarProps
}

export class AppBaseAvatar extends React.Component<IAppBaseAvatarProps, IAppBaseAvatarState> {
  constructor(props: IAppBaseAvatarProps) {
    super(props)

    const { forObject, avatarType, photoUrl } = props
    const avatarProperty: IAvatarProps = new AvatarUtils(forObject, avatarType).getAvatarProperties(
      !!photoUrl ? { uri: photoUrl } : null
    )
    this.state = {
      avatarProperty
    }
  }

  render() {
    const {
      className,
      size,
      round,
      alt,
      title,
      // Only for Client.
      clientStaticImageSource,
      // For Client
      renderClientContainerView,
      renderClientImageView,
      renderClientTextView,
      // For Web
      renderWebContainerView,
      renderWebImageView,
      renderWebTextView
    } = this.props
    const { avatarProperty } = this.state

    return (
      <Avatar
        {...avatarProperty}
        clientStaticImageSource={clientStaticImageSource}
        renderClientContainerView={renderClientContainerView}
        renderClientImageView={renderClientImageView}
        renderClientTextView={renderClientTextView}
        renderWebContainerView={renderWebContainerView}
        renderWebImageView={renderWebImageView}
        renderWebTextView={renderWebTextView}
        round={round}
        className={className}
        size={size}
      />
    )
  }
}
