import { IGlobalizeFormatter } from './iRelativeTime'
import { NumeralUtils } from '../basicUtils/numeralUtils'

import { TranslationFunction } from '../i18'

export class GlobalizeFormatter implements IGlobalizeFormatter {
  private t: TranslationFunction
  constructor(t: TranslationFunction) {
    this.t = t
  }
  private getPostValue(key, value, shouldCompact) {
    if (value === 1 || value === -1) {
      if (shouldCompact) {
        return ''
      }
      return 'one'
    }
    return 'other'
  }

  private getMiddleValue(key, value, shouldCompact) {
    if (value > 0) {
      if (shouldCompact && value === 1) {
        return 'next'
      }
      return 'future.'
    }

    if (value < 0) {
      if (shouldCompact && value === -1) {
        return 'previous'
      }
      return 'past.'
    }
    return ''
  }

  private format(key, value, shouldCompact = false) {
    if (value !== 0) {
      const postValue = this.getPostValue(key, value, shouldCompact)
      const middleValue = this.getMiddleValue(key, value, shouldCompact)
      const formatValue = value < 0 ? -value : value
      const nextValue = NumeralUtils.format(formatValue, '')
      return this.t(`long:${key}.${middleValue}${postValue}`, {
        0: nextValue
      })
    }
    return this.t(`long:${key}.current`)
  }
  year(years) {
    return this.format('year', years, true)
  }
  month(months) {
    return this.format('month', months, true)
  }
  day(days) {
    return this.format('day', days, true)
  }
  hour(hours) {
    return this.format('hour', hours)
  }
  minute(minutes) {
    return this.format('minute', minutes)
  }
  second(seconds) {
    return this.format('second', seconds)
  }
}
