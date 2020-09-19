import * as React from 'react'

import { parseSize, IParseSizeResult } from '../utils'

import { IAvatarProps, IAvatarState, AvatarPropsWithDefaults } from './iAvatar'

import {
  IAvatarRenderWebImageViewProps,
  IAvatarRenderWebContainerProps,
  IAvatarRenderWebTextViewProps
} from './iAvatarWeb'

export interface IAvatarRenderWebProps extends IAvatarProps {
  imageSrc?: string | null
  initialsStyle: any
  tableStyle: any
  spanStyle: any
}

interface IAvatarWebViewProps extends IAvatarProps, IAvatarState {}

export class AvatarWebView extends React.Component<IAvatarWebViewProps, {}> {
  constructor(props: IAvatarWebViewProps) {
    super(props)
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

  renderAsImage(imageSrc: string) {
    const { internal, renderWebImageView, imageClassName } = this.props
    const size = this.props.size
    const round = this.props.round
    const alt: any = this.props.name || this.props.value
    const imageStyle: any = this.props.unstyled
      ? null
      : {
          maxWidth: '100%',
          width: size,
          height: size,
          borderRadius: round ? 500 : 0
        }

    if (!!renderWebImageView) {
      const renderWebImageViewProps: IAvatarRenderWebImageViewProps = {
        imageClassName,
        imageStyle,
        imageSrc,
        alt,
        onError: internal && internal.fetch
      }

      return renderWebImageView(renderWebImageViewProps)
    }

    return null
  }

  renderAsText() {
    const { className, round, unstyled, renderWebTextView, textClassName } = this
      .props as AvatarPropsWithDefaults
    const size: IParseSizeResult = parseSize(this.props.size)

    const initialsStyle: any = unstyled
      ? null
      : {
          width: size.str,
          height: size.str,
          lineHeight: 'initial',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: this.props.fgColor,
          background: this.props.color,
          borderRadius: round === true ? '100%' : round
        }

    const tableStyle: any = unstyled
      ? null
      : {
          display: 'table',
          width: '100%',
          height: '100%'
        }

    const spanStyle: any = unstyled
      ? null
      : {
          display: 'table-cell',
          verticalAlign: 'middle'
        }

    if (!!renderWebTextView) {
      const renderWebTextViewProps: IAvatarRenderWebTextViewProps = {
        className,
        textClassName,
        initialsStyle,
        tableStyle,
        spanStyle,
        scaleTextNode: this.scaleTextNode,
        spanKey: this.props.value || 'avatarKey',
        textValue: this.props.value
      }

      return renderWebTextView(renderWebTextViewProps)
    }

    return null

    // return (
    //   <div className={className + ' sb-avatartext'} style={initialsStyle}>
    //     <div style={tableStyle}>
    //       <span style={spanStyle}>
    //         <span ref={this.scaleTextNode} key={this.props.value || 'avatarKey'}>
    //           {this.props.value}
    //         </span>
    //       </span>
    //     </div>
    //   </div>
    // )
  }

  render() {
    const { style, sourceName, renderWebContainerView, src } = this.props
    const { className, unstyled, round } = this.props as AvatarPropsWithDefaults
    const {} = this.props
    const size: IParseSizeResult = parseSize(this.props.size)

    const hostStyle = unstyled
      ? null
      : {
          display: 'inline-block',
          verticalAlign: 'middle',
          width: size.str,
          height: size.str,
          borderRadius: round === true ? '100%' : round,
          fontFamily: 'Helvetica, Arial, sans-serif',
          ...style
        }

    const classNames = [className, 'sb-avatar']

    if (sourceName) {
      const source = sourceName
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, '-') // only allow alphanumeric
        .replace(/^-+|-+$/g, '') // trim `-`
      classNames.push('sb-avatar--' + source)
    }

    if (!!renderWebContainerView) {
      const renderWebProps: IAvatarRenderWebContainerProps = {
        children: !!src ? this.renderAsImage(src) : this.renderAsText(),
        hostStyle,
        classNames: classNames.join(' ')
      }

      return renderWebContainerView(renderWebProps)
    }

    return null

    // return (
    //   <div className={classNames.join(' ')} onClick={this.props.onClick} style={hostStyle}>
    //     {src ? this.renderAsImage(src) : this.renderAsText()}
    //   </div>
    // )
  }
}
