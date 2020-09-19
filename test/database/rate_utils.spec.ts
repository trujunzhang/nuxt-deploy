import { calcRateForRestaurant } from '~/database/rate_utils'

describe('calcRateForRestaurant', () => {
  test('is a functions', () => {
    let rate = calcRateForRestaurant(3.0 + 2 + 4 + 2 + 5, 5) // 16(3.2)
    expect(rate).toBe(3.0)
    rate = calcRateForRestaurant(3.0 + 4 + 4 + 2 + 5, 5) // 18(3.6)
    expect(rate).toBe(3.5)
    rate = calcRateForRestaurant(4.0 + 4 + 4 + 5 + 5, 5) // 22(4.4)
    expect(rate).toBe(4.5)
    rate = calcRateForRestaurant(4.0 + 3, 2) // 7(3.5)
    expect(rate).toBe(3.5)
  })
})
