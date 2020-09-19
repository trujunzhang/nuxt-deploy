import { GlobalizeFormatter } from './globalizeFormatter'
import { RelativeTimeUtils } from './relativeTimeUtils'

import { IGlobalizeFormatter } from './iRelativeTime'

import { TranslationFunction } from '../i18'

export class RelativeTime {
  private threshold = {
    month: 6, // at least 2 months before using year.
    // week: 4, // at least 4 weeks before using month.
    day: 6, // at least 6 days before using month.
    hour: 6, // at least 6 hours before using day.
    minute: 59, // at least 59 minutes before using hour.
    second: 59 // at least 59 seconds before using minute.
  }

  private formatters: IGlobalizeFormatter
  constructor(t: TranslationFunction) {
    this.formatters = new GlobalizeFormatter(t)
  }

  private bestFit(absDiff) {
    const threshold = this.threshold
    switch (true) {
      case absDiff.years > 0 && absDiff.months > threshold.month:
        return 'year'
      case absDiff.months > 0 && absDiff.days > threshold.day:
        return 'month'
      // case absDiff.months > 0 && absDiff.weeks > threshold.week: return "month";
      // case absDiff.weeks > 0 && absDiff.days > threshold.day: return "week";
      case absDiff.days > 0 && absDiff.hours > threshold.hour:
        return 'day'
      case absDiff.hours > 0 && absDiff.minutes > threshold.minute:
        return 'hour'
      case absDiff.minutes > 0 && absDiff.seconds > threshold.second:
        return 'minute'
      default:
        return 'second'
    }
  }

  format(date, { timeZoneData = null, unit = 'best-fit' } = {}) {
    const formatters: IGlobalizeFormatter = this.formatters
    const now = new Date()

    const diff: any = {
      _: {},
      ms: date.getTime() - now.getTime(),
      years: date.getFullYear() - now.getFullYear()
    }
    const round = Math[diff.ms > 0 ? 'floor' : 'ceil']

    RelativeTimeUtils.defineCachedGetter(diff, 'months', () => {
      return diff.years * 12 + date.getMonth() - now.getMonth()
    })
    RelativeTimeUtils.defineCachedGetter(diff, 'days', () => {
      return round(
        (RelativeTimeUtils.startOf(date, 'day') - RelativeTimeUtils.startOf(now, 'day')) /
          RelativeTimeUtils.day
      )
    })
    RelativeTimeUtils.defineCachedGetter(diff, 'hours', () => {
      return round(
        (RelativeTimeUtils.startOf(date, 'hour') - RelativeTimeUtils.startOf(now, 'hour')) /
          RelativeTimeUtils.hour
      )
    })
    RelativeTimeUtils.defineCachedGetter(diff, 'minutes', () => {
      return round(
        (RelativeTimeUtils.startOf(date, 'minute') - RelativeTimeUtils.startOf(now, 'minute')) /
          RelativeTimeUtils.minute
      )
    })
    RelativeTimeUtils.defineCachedGetter(diff, 'seconds', () => {
      return round(
        (RelativeTimeUtils.startOf(date, 'second') - RelativeTimeUtils.startOf(now, 'second')) /
          RelativeTimeUtils.second
      )
    })

    const absDiff = {
      _: {}
    }

    RelativeTimeUtils.defineGetter(absDiff, 'years', () => {
      return Math.abs(diff.years)
    })
    RelativeTimeUtils.defineGetter(absDiff, 'months', () => {
      return Math.abs(diff.months)
    })
    RelativeTimeUtils.defineGetter(absDiff, 'days', () => {
      return Math.abs(diff.days)
    })
    RelativeTimeUtils.defineGetter(absDiff, 'hours', () => {
      return Math.abs(diff.hours)
    })
    RelativeTimeUtils.defineGetter(absDiff, 'minutes', () => {
      return Math.abs(diff.minutes)
    })
    RelativeTimeUtils.defineGetter(absDiff, 'seconds', () => {
      return Math.abs(diff.seconds)
    })

    if (unit === 'best-fit') {
      unit = this.bestFit(absDiff)
    }

    switch (unit) {
      case 'year':
        return formatters.year(diff.years)
      case 'month':
        return formatters.month(diff.months)
      // case "week": return formatters.week(diff.weeks);
      case 'day':
        return formatters.day(diff.days)
      case 'hour':
        return formatters.hour(diff.hours)
      case 'minute':
        return formatters.minute(diff.minutes)
      default:
        return formatters.second(diff.seconds)
    }
  }
}
