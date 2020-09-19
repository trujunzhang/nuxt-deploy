import { slugifyToLower } from '~/database/slug_helper'

describe('slugify', () => {
  test('is a Vue instance', () => {
    const lowerStr = slugifyToLower('Upper STring')
    expect(lowerStr).toBe('upper-string')
  })
})
