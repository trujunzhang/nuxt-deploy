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

  describe('bestFit', () => {
    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2016-04-10 12:00:00').getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('should format years-distant dates', () => {
      expect(relativeTime.format(new Date('2010-06-01 12:00'))).toEqual('6 years ago')
      expect(relativeTime.format(new Date('2015-08-31 23:59'))).toEqual('last year')
      expect(relativeTime.format(new Date('2017-05-01 00:00'))).toEqual('next year')

      sinon.useFakeTimers(new Date('2016-10-02 12:00').getTime())
      expect(relativeTime.format(new Date('2017-01-01 00:00'))).toEqual('in 3 months')
    })
  })
})
