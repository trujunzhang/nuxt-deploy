export interface ITwitterBaseSource {
  twitterHandle?: string
}

export interface ITwitterSource extends ITwitterBaseSource {
  size: number
}

export class TwitterSource {
  static propTypes = {}

  private props: ITwitterSource

  constructor(props: ITwitterSource) {
    this.props = props
  }

  isCompatible = () => {
    return !!this.props.twitterHandle
  }

  getImageSize() {
    const { size } = this.props

    if (size <= 24) {
      return 'mini'
    }

    if (size <= 48) {
      return 'normal'
    }

    if (size <= 73) {
      return 'bigger'
    }

    return 'original'
  }

  get = (setState: any) => {
    const { twitterHandle } = this.props
    const size = this.getImageSize()

    const url = `https://twitter.com/${twitterHandle}/profile_image?size=${size}`

    setState({
      sourceName: 'twitter',
      src: url
    })
  }
}
