import { UpperCaseStringUtils } from '../upperCaseStringUtils'

describe('methods correctly in the utils', () => {
  test('should return string correctly invoked getSlugifyString', () => {
    const upperString = UpperCaseStringUtils.toCamelClassName('arrow-left')

    expect('ArrowLeft').toEqual(upperString)
  })
})
