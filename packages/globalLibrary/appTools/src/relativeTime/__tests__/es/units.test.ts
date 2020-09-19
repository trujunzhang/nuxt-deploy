import * as sinon from 'sinon'

import * as resources from '../../../../static/locales/i18nextLocalesLoader'
import { getI18nextMockerWithResources } from '../../../i18'
import { RelativeTime } from '../../index'

describe('relative-time', () => {
  let clock
  let relativeTime

  beforeAll(() => {
    getI18nextMockerWithResources(
      resources,
      (t) => {
        relativeTime = new RelativeTime(t)
      },
      'en'
    )
  })

  describe('explicit units', () => {
    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2016-04-10 12:00:00').getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('shold format relative time using seconds', () => {
      expect(
        relativeTime.format(new Date('2016-04-10 11:59:01'), {
          unit: 'second'
        })
      ).toEqual('59 seconds ago')
      expect(
        relativeTime.format(new Date('2016-04-10 11:01:00'), {
          unit: 'second'
        })
      ).toEqual('3,540 seconds ago')
      expect(
        relativeTime.format(new Date('2016-04-10 00:00'), {
          unit: 'second'
        })
      ).toEqual('43,200 seconds ago')
    })

    it('shold format relative time using minutes', () => {
      expect(
        relativeTime.format(new Date('2016-04-10 12:00:47'), {
          unit: 'minute'
        })
      ).toEqual('this minute')
      expect(
        relativeTime.format(new Date('2016-04-10 11:59:45'), {
          unit: 'minute'
        })
      ).toEqual('1 minute ago')
      expect(
        relativeTime.format(new Date('2016-04-10 11:01:00'), {
          unit: 'minute'
        })
      ).toEqual('59 minutes ago')
      expect(
        relativeTime.format(new Date('2016-04-01 00:00'), {
          unit: 'minute'
        })
      ).toEqual('13,680 minutes ago')
    })

    it('shold format relative time using hours', () => {
      expect(
        relativeTime.format(new Date('2016-04-10 12:45:00'), {
          unit: 'hour'
        })
      ).toEqual('this hour')
      expect(
        relativeTime.format(new Date('2016-04-10 11:01:00'), {
          unit: 'hour'
        })
      ).toEqual('1 hour ago')
      expect(
        relativeTime.format(new Date('2016-04-10 00:00'), {
          unit: 'hour'
        })
      ).toEqual('12 hours ago')
      expect(
        relativeTime.format(new Date('2016-04-01 00:00'), {
          unit: 'hour'
        })
      ).toEqual('228 hours ago')
      expect(
        relativeTime.format(new Date('2016-01-01 00:00'), {
          unit: 'hour'
        })
      ).toEqual('2,412 hours ago')
    })

    it('shold format relative time using days', () => {
      expect(
        relativeTime.format(new Date('2016-04-10 11:30:00'), {
          unit: 'day'
        })
      ).toEqual('today')
      expect(
        relativeTime.format(new Date('2016-01-01 00:00'), {
          unit: 'day'
        })
      ).toEqual('100 days ago')
    })

    it('shold format relative time using months', () => {
      expect(
        relativeTime.format(new Date('2016-04-10 23:59:59'), {
          unit: 'month'
        })
      ).toEqual('this month')
      expect(
        relativeTime.format(new Date('2017-01-01 00:00'), {
          unit: 'month'
        })
      ).toEqual('in 9 months')
    })
  })
})
