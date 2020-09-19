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

    it('should format months-distant dates', () => {
      expect(relativeTime.format(new Date('2016-01-01 00:00'))).toEqual('3 months ago')
      expect(relativeTime.format(new Date('2016-03-01 00:00'))).toEqual('last month')
      expect(relativeTime.format(new Date('2016-05-01 00:00'))).toEqual('next month')
      expect(relativeTime.format(new Date('2016-12-01 23:59'))).toEqual('in 8 months')
    })
  })
})
