import { getMd5Str } from '~/database/md5_utils'

describe('md5', () => {
  test('is a Vue instance', () => {
    const digest = getMd5Str('2017-11-07T07:43:10.690+0000')
    expect(digest).toBe('df1546979d56fe7fbf8ab2b24cc54668')
  })
})
