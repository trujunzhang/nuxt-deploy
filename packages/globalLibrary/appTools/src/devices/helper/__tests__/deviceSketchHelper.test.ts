import { DeviceSketchHelper } from '../deviceSketchHelper'

describe('methods correctly in the utils', () => {
  test('should return string correctly invoked getSlugifyString', () => {
    const currentStyle = DeviceSketchHelper.getCurrentDevicePageStyle()

    expect(currentStyle.width).toEqual(375)
    expect(currentStyle.height).toEqual(812)
  })
})
