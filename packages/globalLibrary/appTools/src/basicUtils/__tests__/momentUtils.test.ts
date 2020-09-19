import { MomentUtils } from '../momentUtils'

const parseServerStandardDates = {
  eachDay: {
    date: new Date('Mon Jan 21 2019 00:00:00 GMT+0800'), // 2019-01-21
    expected: '2019-01-21',
    // format: 'ddd MMM DD YYYY'
    format: 'YYYY-MM-DD'
  },
  updatedAt: {
    date: '2015-12-07T21:27:13.746Z',
    expected: '2015-12-07',
    format: 'YYYY-MM-DD'
  },
  createdAt: {
    date: '2016-03-11T23:51:48.050Z',
    expected: '2016-03-11',
    format: 'YYYY-MM-DD'
  }
}

describe('methods on the QueryStringUtils', () => {
  test('return correctly, getQueryObject', () => {
    const nowDateObject = parseServerStandardDates['eachDay']
    // const nowDateObject = parseServerStandardDates['updatedAt']
    // const nowDate: string = parseServerStandardDates.updatedAt
    // const queryObject = MomentUtils.toDateIOSString(nowDate)

    const queryObject = MomentUtils.toDateString(nowDateObject.date, nowDateObject.format)

    expect(queryObject).toEqual(nowDateObject.expected)
  })
})

describe('methods on the createMomentInstance', () => {
  test('return correctly, createMomentInstance', () => {
    // After: [2018-12-03]
    const after = '2018-12-03'
    const date = MomentUtils.createMomentInstance(after).toDate()

    const queryObject = MomentUtils.toDateString(date, 'YYYY-MM-DD')

    expect(queryObject).toEqual(after)
  })
})
