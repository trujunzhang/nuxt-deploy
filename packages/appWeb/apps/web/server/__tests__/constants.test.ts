import * as ServerConstants from '@app/types'

describe('functions of constants of the server', () => {
  it('should return serverURL for parse server', () => {
    const url = ServerConstants.getServerURLForParse()
    expect(url).toBe('https://ieatta-web.herokuapp.com/parse')
  })
})
