// import { RandToken } from '../node-rand-token'
import { NodeRandTokenUtils as RandToken } from '../nodeRandTokenUtils'

describe('methods correctly in the RandToken', () => {
  test('should return string correctly invoked RandToken', () => {
    const token = RandToken.generate(32)
    // expect(32).toEqual(token.length)
  })
})
