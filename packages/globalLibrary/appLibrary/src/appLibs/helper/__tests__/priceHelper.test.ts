import { PriceHelper } from '../priceHelper'

describe('Functions of the PriceHelper', () => {
  it('should return correctly', () => {
    const fixed = PriceHelper.fixPriceAsString('$1,234')
    expect(fixed).toBe('1234')
  })
})
