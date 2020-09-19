const WebPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies, devDependencies } = WebPackage

    // Library 'react-datetime' require 'moment'.
    // Module not found: Can't resolve 'moment' in '/Users/djzhang/Documents/Organizations/__CODING/CURRENT/global-ieatta-lerna/packages/appWeb/app/node_modules/react-datetime'
    expect(dependencies['moment']).toBeDefined()

    expect(dependencies['isomorphic-unfetch']).toBe('3.0.0')
    expect(dependencies['react-leaflet']).toBeDefined()
    expect(dependencies['whatwg-fetch']).toBe('2.0.4')
    expect(dependencies['react-dropzone']).toBe('7.0.1')
  })
})
