export interface IFacebookBaseSource {
  facebookId?: string
}
export interface IFacebookSource extends IFacebookBaseSource {
  size: number
}

export class FacebookSource {
  private props: IFacebookSource

  constructor(props: IFacebookSource) {
    this.props = props
  }

  isCompatible = () => !!this.props.facebookId

  get = (setState: any) => {
    const { size, facebookId } = this.props
    const url = 'https://graph.facebook.com/' + `${facebookId}/picture?width=${size}&height=${size}`

    setState({
      sourceName: 'facebook',
      src: url
    })
  }
}
