import { StatusConstants } from '../constants'

export class ParseModelImageHelper {
  /**
   * @param user
   * @returns {*}
   */
  static getUserCoverUrl(user: IParseModelUsers): string {
    const coverUrls: any = user.coverUrls
    if (!!coverUrls && coverUrls.length > 0) {
      return StatusConstants.adjustCloudinaryAndEmbedlyUrl(coverUrls[0].url)
    }
    return ''
  }
}
