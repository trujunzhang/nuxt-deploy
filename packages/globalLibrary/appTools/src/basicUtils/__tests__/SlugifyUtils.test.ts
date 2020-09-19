import { SlugifyUtils } from '../slugifyUtils'

describe('methods correctly in the utils', () => {
  test('should return string correctly invoked getSlugifyString', () => {
    const slugifyString = SlugifyUtils.toSlugifyString('user ‘name’ and(†) “displayname”,  ')

    const expectedSlugifyString = 'user_\'name\'_and(+)_"displayname"'
    expect(expectedSlugifyString).toEqual(slugifyString)
  })
})
