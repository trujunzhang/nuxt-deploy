import { LodashUtils as _ } from '../../basicUtils/lodashUtils'

import * as IphonesResource from '../resources/apple/iPhone'

/**
 *
 * Popular Screen Resolutions: Designing for All
 *   https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
 *
 */
export class DeviceSketchHelper {
  static getCurrentDevicePageStyle() {
    const deviceInfo = _.find(IphonesResource.res.devices, { tag: 'iPhoneXS' })
    const viewport = deviceInfo.size.Viewport
    // const pixelSize = deviceInfo.size.PixelSize
    return {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: viewport.width,
      height: viewport.height
      // backgroundColor: 'blue'
    }
  }
}
