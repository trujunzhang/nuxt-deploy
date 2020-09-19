import * as React from 'react'

interface IF8PlaceHolderImageProps {
  source: any
  placeholderSource: any
  onLoad?: any
  onError?: any
  width: number
  height: number
  className?: string
  alt: string
}

interface IF8PlaceHolderImageState {
  source: any
}

export class F8PlaceHolderImage extends React.Component<
  IF8PlaceHolderImageProps,
  IF8PlaceHolderImageState
> {
  constructor(props) {
    super(props)

    const { source, placeholderSource } = this.props

    const current = source || placeholderSource
    this.state = {
      source: current
    }
  }

  onLoad = () => {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }
  onError = () => {
    const { placeholderSource } = this.props
    if (this.props.onError) {
      this.props.onError()
    }
    if (placeholderSource) {
      this.setState({ source: placeholderSource })
    }
  }

  render() {
    const { source } = this.state
    return (
      <img
        width={this.props.width}
        height={this.props.height}
        className={this.props.className}
        alt={this.props.alt}
        src={source}
        onLoad={this.onLoad.bind(this)}
        onError={this.onError.bind(this)}
      />
    )
  }
}
