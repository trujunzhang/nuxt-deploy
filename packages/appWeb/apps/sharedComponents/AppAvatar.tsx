import * as React from 'react'

import { AppBaseAvatar } from './AppBaseAvatar'
import {
  IAvatarRenderWebContainerProps,
  IAvatarRenderWebImageViewProps,
  IAvatarRenderWebTextViewProps
} from '@app/avatar'

interface IAppAvatarProps {
  avatarType?: string
  forObject: any
  className?: string
  size?: number
  round?: boolean
  alt?: string
  title?: string
  photoUrl: string | null
}

export class AppAvatar extends React.Component<IAppAvatarProps, {}> {
  render() {
    return (
      <AppBaseAvatar
        {...this.props}
        renderWebContainerView={(renderWebContainerProps: IAvatarRenderWebContainerProps) => {
          const { classNames, onClick, hostStyle, children } = renderWebContainerProps
          return (
            <div className={classNames} onClick={onClick} style={hostStyle}>
              {children}
            </div>
          )
        }}
        renderWebImageView={(renderWebImageViewProps: IAvatarRenderWebImageViewProps) => {
          const { size, imageStyle, imageSrc, alt, onError } = renderWebImageViewProps
          return (
            <img
              width={size}
              height={size}
              style={imageStyle}
              src={imageSrc}
              alt={alt}
              onError={onError}
            />
          )
        }}
        renderWebTextView={(renderWebTextViewProps: IAvatarRenderWebTextViewProps) => {
          const {
            className,
            initialsStyle,
            tableStyle,
            spanStyle,
            scaleTextNode,
            spanKey,
            textValue
          } = renderWebTextViewProps
          return (
            <div className={className + ' sb-avatartext'} style={initialsStyle}>
              <div style={tableStyle}>
                <span style={spanStyle}>
                  <span ref={scaleTextNode} key={spanKey}>
                    {textValue}
                  </span>
                </span>
              </div>
            </div>
          )
        }}
      />
    )
  }
}
