export interface ISkypeSource {
  skypeId?: string
}

export class SkypeSource {
  private props: ISkypeSource

  constructor(props: ISkypeSource) {
    this.props = props
  }

  isCompatible = () => {
    return !!this.props.skypeId
  }

  get = (setState: any) => {
    const { skypeId } = this.props
    const onError = () => setState(null)
    if (!skypeId) {
      return onError()
    }
    const url = `https://api.skype.com/users/${skypeId}/profile/avatar`

    setState({
      sourceName: 'skype',
      src: url
    })
  }
}
