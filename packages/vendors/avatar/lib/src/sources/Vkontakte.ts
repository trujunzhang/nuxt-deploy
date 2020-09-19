import { fetchJSONP } from '../utils'

export interface IVkontakteBaseSource {
  vkontakteId?: string
}

export interface IVkontakteSource extends IVkontakteBaseSource {
  size: number
}

export class VkontakteSource {
  private props: IVkontakteSource

  constructor(props: IVkontakteSource) {
    this.props = props
  }

  isCompatible = () => !!this.props.vkontakteId

  getImageSize() {
    const { size } = this.props

    if (size <= 50) {
      return 'photo_50'
    }

    if (size <= 100) {
      return 'photo_100'
    }

    if (size <= 200) {
      return 'photo_200'
    }

    return 'photo_max'
  }

  get = (setState: any) => {
    const { vkontakteId } = this.props
    const size = this.getImageSize()
    const url = `https://api.vk.com/method/users.get?user_id=${vkontakteId}&v=5.8&fields=${size}`
    const onError = () => setState(null)

    fetchJSONP(
      url,
      (data: any) => {
        const src = data && data.response && data.response[0]

        if (!src) {
          return onError()
        }

        setState({
          sourceName: 'vkontakte',
          src
        })
      },
      onError
    )
  }
}
