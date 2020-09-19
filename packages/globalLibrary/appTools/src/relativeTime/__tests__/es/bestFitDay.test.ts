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
      'es'
    )
  })

  describe('bestFit', () => {
    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2016-04-10 12:00:00').getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('should format seconds-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 11:59:01'))).toEqual('hace 59 segundos')
      expect(relativeTime.format(new Date('2016-04-10 12:00:00'))).toEqual('ahora')
      expect(relativeTime.format(new Date('2016-04-10 12:00:59'))).toEqual('dentro de 59 segundos')
    })

    it('should format minutes-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 11:01:00'))).toEqual('hace 59 minutos')
      expect(relativeTime.format(new Date('2016-04-10 11:59'))).toEqual('hace 1 minuto')
      expect(relativeTime.format(new Date('2016-04-10 12:01'))).toEqual('dentro de 1 minuto')
      expect(relativeTime.format(new Date('2016-04-10 12:01:59'))).toEqual('dentro de 1 minuto')
      expect(relativeTime.format(new Date('2016-04-10 12:59:59'))).toEqual('dentro de 59 minutos')
    })

    it('should format hours-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 00:00'))).toEqual('hace 12 horas')
      expect(relativeTime.format(new Date('2016-04-10 13:00'))).toEqual('dentro de 1 hora')
      expect(relativeTime.format(new Date('2016-04-10 13:59:59'))).toEqual('dentro de 1 hora')
      expect(relativeTime.format(new Date('2016-04-10 23:59:59'))).toEqual('dentro de 11 horas')

      sinon.useFakeTimers(new Date('2016-04-10 01:00').getTime())
      expect(relativeTime.format(new Date('2016-04-09 19:00'))).toEqual('hace 6 horas')
      expect(relativeTime.format(new Date('2016-04-09 18:00'))).toEqual('ayer')

      sinon.useFakeTimers(new Date('2016-04-10 23:00').getTime())
      expect(relativeTime.format(new Date('2016-04-11 05:00'))).toEqual('dentro de 6 horas')
      expect(relativeTime.format(new Date('2016-04-11 06:00'))).toEqual('mañana')

      sinon.useFakeTimers(new Date('2016-01-31 23:00').getTime())
      expect(relativeTime.format(new Date('2016-02-01 05:00'))).toEqual('dentro de 6 horas')
      expect(relativeTime.format(new Date('2016-02-01 07:00'))).toEqual('mañana')

      sinon.useFakeTimers(new Date('2016-12-31 23:00').getTime())
      expect(relativeTime.format(new Date('2017-01-01 05:00'))).toEqual('dentro de 6 horas')
      expect(relativeTime.format(new Date('2017-01-01 07:00'))).toEqual('mañana')
    })

    it('should format days-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-01 00:00'))).toEqual('hace 9 días')
      expect(relativeTime.format(new Date('2016-04-09 18:00'))).toEqual('ayer')
      expect(relativeTime.format(new Date('2016-04-11 09:00'))).toEqual('mañana')
      expect(relativeTime.format(new Date('2016-04-30 23:59'))).toEqual('dentro de 20 días')
      expect(relativeTime.format(new Date('2016-03-21 23:59'))).toEqual('el mes pasado')
      expect(relativeTime.format(new Date('2016-05-01 00:00'))).toEqual('el próximo mes')

      sinon.useFakeTimers(new Date('2016-04-06 12:00').getTime())
      expect(relativeTime.format(new Date('2016-03-31 23:59'))).toEqual('hace 6 días')

      sinon.useFakeTimers(new Date('2016-04-25 23:00').getTime())
      expect(relativeTime.format(new Date('2016-05-01 00:00'))).toEqual('dentro de 6 días')
    })
  })
})
