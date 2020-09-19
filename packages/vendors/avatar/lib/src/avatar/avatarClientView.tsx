import * as React from 'react'

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd']
const DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150
}

import { IAvatarProps, IAvatarState, AvatarPropsWithDefaults } from './iAvatar'

import {
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientTextViewProps,
  IAvatarRenderClientImageViewProps
} from './iAvatarClient'

export interface IAvatarClientViewProps extends IAvatarProps, IAvatarState {}

export class AvatarClientView extends React.Component<IAvatarClientViewProps, {}> {
  constructor(props: IAvatarClientViewProps) {
    super(props)
  }

  getImageSrc(imageSrc: string) {
    const { clientStaticImageSource } = this.props
    if (!!clientStaticImageSource) {
      return clientStaticImageSource
    }
    return {
      uri: imageSrc
    }
  }

  renderAsImage(styles: any, imageSrc: string, width: number) {
    const { internal, avatarStyle, renderClientImageView } = this.props
    const size = this.props.size
    const round = this.props.round
    const alt: any = this.props.name || this.props.value

    if (!!renderClientImageView) {
      const renderClientImageViewProps: IAvatarRenderClientImageViewProps = {
        styles,
        round,
        width,
        avatarStyle,
        imageSrc: this.getImageSrc(imageSrc),
        onError: internal && internal.fetch
      }

      return renderClientImageView(renderClientImageViewProps)
    }

    return null
  }

  renderAsText(styles: any, width: number) {
    const { className, titleStyle, value, round, unstyled, renderClientTextView } = this.props
    if (!!renderClientTextView) {
      const renderClientTextViewProps: IAvatarRenderClientTextViewProps = {
        styles,
        round,
        width,
        titleContainerStyle: {
          backgroundColor: this.props.color
        },
        titleStyle,
        textValue: value || ''
      }

      return renderClientTextView(renderClientTextViewProps)
    }

    return null
  }

  scaleTextNode = (node: any) => {
    const { unstyled, textSizeRatio } = this.props

    if (!node || unstyled) {
      return
    }

    const parent = node.parentNode
    if (!parent) {
      return
    }
    const textWidth = node.getBoundingClientRect().width
    if (textWidth < 0) {
      return
    }

    const containerWidth = parent.getBoundingClientRect().width
    const ratio = containerWidth / textWidth

    // Set font-size on parent span, otherwise the `table-cell` span
    // will cause alignment issues.
    node.parentNode.style.fontSize = `calc((100% * ${ratio}) / ${textSizeRatio})`
  }

  render() {
    const {
      containerStyle,
      clientStaticImageSource,
      onClick,
      renderClientContainerView,
      src
    } = this.props
    const { className, unstyled, round } = this.props as AvatarPropsWithDefaults
    const { sourceName } = this.props

    const { size } = this.props

    if (!size) {
      return null
    }

    const iconDimension =
      typeof size === 'number' ? size : !!size ? DEFAULT_SIZES[size] : DEFAULT_SIZES.small

    let height
    let width = (height = iconDimension)

    let titleSize = width / 2

    const platformStyle = {}
    // Platform.getType() === 'ios'
    //   ? {
    //       shadowColor: DEFAULT_COLORS[0],
    //       shadowOffset: { width: 1, height: 1 },
    //       shadowRadius: 2,
    //       shadowOpacity: 0.5
    //     }
    //   : {
    //       elevation: 1
    //     }

    const styles = {
      container: {
        backgroundColor: 'transparent',
        width: width,
        height: height
      },
      avatar: {
        width: width,
        height: height
      },
      overlayContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      title: {
        color: '#ffffff',
        fontSize: titleSize,
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center'
      },
      editButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DEFAULT_COLORS[4],
        ...platformStyle
      }
    }

    if (!!renderClientContainerView) {
      const renderClientContainerProps: IAvatarRenderClientContainerProps = {
        children: this.getChildren(styles, src, width),
        styles,
        round,
        width,
        containerStyle
      }

      return renderClientContainerView(renderClientContainerProps)
    }

    return null
  }

  getChildren(styles: any, src: any, width: number) {
    const { clientStaticImageSource } = this.props
    if (!!clientStaticImageSource || !!src) {
      return this.renderAsImage(styles, src, width)
    }
    return this.renderAsText(styles, width)
  }
}
