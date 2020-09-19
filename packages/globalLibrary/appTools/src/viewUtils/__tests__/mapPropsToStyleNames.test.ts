import { mapPropsToStyleNames } from '../mapPropsToStyleNames'

describe('mapPropsToStyleNames', () => {
  it('should return correctly', () => {
    const styleNames = ['iconSize']
    expect(styleNames[0]).toEqual('iconSize')

    const props = { iconColor: 'red', iconSize: 12 }
    const result = mapPropsToStyleNames(styleNames, props)

    expect(result.length).toEqual(3)
  })
})
