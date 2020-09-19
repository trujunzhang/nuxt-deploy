import { Md5 } from 'ts-md5/dist/md5'

export interface IGravatarBaseSource {
  email?: string
  md5Email?: string
}

export interface IGravatarSource extends IGravatarBaseSource {
  size: number
}

const IS_RETINA = true

export class GravatarSource {
  private props: IGravatarSource

  constructor(props: IGravatarSource) {
    this.props = props
  }

  isCompatible = () => {
    return !!this.props.email || !!this.props.md5Email
  }

  get = (setState: any) => {
    const { props } = this
    const email = props.md5Email || Md5.hashStr(props.email || '')
    const size = IS_RETINA ? props.size * 2 : props.size
    const url = `https://secure.gravatar.com/avatar/${email}?s=${size}&d=404`

    // console.log(' avatar, url: ', url)

    setState({
      sourceName: 'gravatar',
      src: url
    })
  }
}
