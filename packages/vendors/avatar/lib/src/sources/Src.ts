export interface ISrcSource {
  src?: string | null
}

export class SrcSource {
  static propTypes = {}

  private props: ISrcSource

  constructor(props: ISrcSource) {
    this.props = props
  }

  isCompatible = () => !!this.props.src

  get = (setState: any) => {
    setState({
      sourceName: 'src',
      src: this.props.src
    })
  }
}
