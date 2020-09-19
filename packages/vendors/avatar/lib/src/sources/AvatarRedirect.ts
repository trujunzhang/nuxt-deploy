// export interface  IAvatarRedirectSourceProps {
// string
// }

export function createRedirectSource(network: any, property: any) {
  return class AvatarRedirectSource {
    public props: any

    constructor(props: any) {
      this.props = props
    }

    isCompatible = () => {
      return !!this.props.avatarRedirectUrl && !!this.props[property]
    }

    get = (setState: any) => {
      const { size, avatarRedirectUrl } = this.props
      const baseUrl = avatarRedirectUrl.replace(/\/*$/, '/')
      const id = this.props[property]
      const query = size ? '' : `size=${size}`
      const src = `${baseUrl}${network}/${id}?${query}`
      setState({ source: 'network', src })
    }
  }
}
