import * as sinon from 'sinon'

import * as resources from '../../../../static/locales/i18nextLocalesLoader'
import { getI18nextMockerWithResources } from '../../../i18'
import { RelativeTime } from '../../index'

describe('relative-time', () => {
  let clock
  let relativeTime

  beforeAll(() => {
    getI18nextMockerWithResources(resources, (t) => {
      relativeTime = new RelativeTime(t)
    })
  })

  describe('bestFit', () => {
    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2016-04-10 12:00:00').getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('should format seconds-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 11:59:01'))).toEqual('59 seconds ago')
      expect(relativeTime.format(new Date('2016-04-10 12:00:00'))).toEqual('now')
      expect(relativeTime.format(new Date('2016-04-10 12:00:59'))).toEqual('in 59 seconds')
    })

    it('should format minutes-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 11:01:00'))).toEqual('59 minutes ago')
      expect(relativeTime.format(new Date('2016-04-10 11:59'))).toEqual('1 minute ago')
      expect(relativeTime.format(new Date('2016-04-10 12:01'))).toEqual('in 1 minute')
      expect(relativeTime.format(new Date('2016-04-10 12:01:59'))).toEqual('in 1 minute')
      expect(relativeTime.format(new Date('2016-04-10 12:59:59'))).toEqual('in 59 minutes')
    })

    it('should format hours-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 00:00'))).toEqual('12 hours ago')
      expect(relativeTime.format(new Date('2016-04-10 13:00'))).toEqual('in 1 hour')
      expect(relativeTime.format(new Date('2016-04-10 13:59:59'))).toEqual('in 1 hour')
      expect(relativeTime.format(new Date('2016-04-10 23:59:59'))).toEqual('in 11 hours')

      sinon.useFakeTimers(new Date('2016-04-10 01:00').getTime())
      expect(relativeTime.format(new Date('2016-04-09 19:00'))).toEqual('6 hours ago')
      expect(relativeTime.format(new Date('2016-04-09 18:00'))).toEqual('yesterday')

      sinon.useFakeTimers(new Date('2016-04-10 23:00').getTime())
      expect(relativeTime.format(new Date('2016-04-11 05:00'))).toEqual('in 6 hours')
      expect(relativeTime.format(new Date('2016-04-11 06:00'))).toEqual('tomorrow')

      sinon.useFakeTimers(new Date('2016-01-31 23:00').getTime())
      expect(relativeTime.format(new Date('2016-02-01 05:00'))).toEqual('in 6 hours')
      expect(relativeTime.format(new Date('2016-02-01 07:00'))).toEqual('tomorrow')

      sinon.useFakeTimers(new Date('2016-12-31 23:00').getTime())
      expect(relativeTime.format(new Date('2017-01-01 05:00'))).toEqual('in 6 hours')
      expect(relativeTime.format(new Date('2017-01-01 07:00'))).toEqual('tomorrow')
    })

    it('should format days-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-01 00:00'))).toEqual('9 days ago')
      expect(relativeTime.format(new Date('2016-04-09 18:00'))).toEqual('yesterday')
      expect(relativeTime.format(new Date('2016-04-11 09:00'))).toEqual('tomorrow')
      expect(relativeTime.format(new Date('2016-04-30 23:59'))).toEqual('in 20 days')
      expect(relativeTime.format(new Date('2016-03-21 23:59'))).toEqual('last month')
      expect(relativeTime.format(new Date('2016-05-01 00:00'))).toEqual('next month')

      sinon.useFakeTimers(new Date('2016-04-06 12:00').getTime())
      expect(relativeTime.format(new Date('2016-03-31 23:59'))).toEqual('6 days ago')

      sinon.useFakeTimers(new Date('2016-04-25 23:00').getTime())
      expect(relativeTime.format(new Date('2016-05-01 00:00'))).toEqual('in 6 days')
    })
  })
})
