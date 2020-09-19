import { fetchJson } from '../utils'

export interface IGoogleBaseSource {
  googleId?: string
  cache?: any
}

export interface IGoogleSource extends IGoogleBaseSource {
  size: number
}

export class GoogleSource {
  private props: IGoogleSource

  constructor(props: IGoogleSource) {
    this.props = props
  }

  isCompatible = () => !!this.props.googleId

  get = (setState: any) => {
    const { size, googleId } = this.props
    const url = `https://picasaweb.google.com/data/entry/api/user/${googleId}?alt=json`

    // if (cache.hasSourceFailedBefore(url)) {
    // setState(null)
    // return
    // }

    fetchJson(
      url,
      (data: any) => {
        const src = data.entry.gphoto$thumbnail.$t
        const srcWithCorrectSize = src.replace('s64', 's' + size)
        setState({
          sourceName: 'google',
          src: srcWithCorrectSize
        })
      },
      () => {
        // on error
        // cache.sourceFailed(url);
        setState(null)
      }
    )
  }
}
