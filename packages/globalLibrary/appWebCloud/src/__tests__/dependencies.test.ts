const ClientPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies, devDependencies } = ClientPackage

    expect(dependencies.cloudinary).toEqual('1.11.0')
  })
})
