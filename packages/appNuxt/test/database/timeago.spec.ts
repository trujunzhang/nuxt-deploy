import { formatByTimeAgoForTest, formatDateForReview } from '~/database/timeago_helper'

describe('timeago', () => {
  test('javascript date/time', () => {
    const str = new Date().toISOString()
  })

  test('formatDateForReview', () => {
    let str = formatDateForReview('2017-11-07T07:43:10.690+0000')
    expect(str).toBe('07/11/2017')
    str = formatDateForReview('2017-01-07T07:43:10.690+0000')
    expect(str).toBe('07/01/2017')
  })

  test('is a Vue instance', () => {
    //  updatedAt: '2017-11-07T07:43:10.690+0000',
    // '2018-11-11'
    let timeAgo: string = formatByTimeAgoForTest('2017-11-07T07:43:10.690+0000')
    expect(timeAgo).toBe('1 year ago')
    timeAgo = formatByTimeAgoForTest('2018-11-07T07:43:10.690+0000')
    expect(timeAgo).toBe('3 days ago')
    timeAgo = formatByTimeAgoForTest('2018-11-11T07:43:10.690+0000')
    expect(timeAgo).toBe('in 15 hours')
  })
})