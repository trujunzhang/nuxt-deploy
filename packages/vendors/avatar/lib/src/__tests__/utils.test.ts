import { parseSize, IParseSizeResult, getRandomColor } from '../utils'

describe('Functions of the utils', () => {
  it('should parseSize result correctly', () => {
    const result: IParseSizeResult = parseSize('40')
    expect(result.str).toBe('40px')
    expect(result.unit).toBe('px')
    expect(result.value).toBe(40)
  })

  it('should return random color correctly', () => {
    const email = 'bla'
    const source = [...email]
    const array = Array.from(email)

    const result = getRandomColor(email)
    const name = 'Jessica Jones'
    const x = 0
  })
})
