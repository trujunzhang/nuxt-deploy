const ClientPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies, devDependencies } = ClientPackage

    expect(dependencies.moment).toEqual('2.23.0')
    expect(dependencies.slugify).toEqual('1.3.4')
  })
})
