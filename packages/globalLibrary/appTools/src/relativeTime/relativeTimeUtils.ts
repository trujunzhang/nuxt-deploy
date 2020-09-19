export class RelativeTimeUtils {
  static second = 1e3
  static minute = 6e4
  static hour = 36e5
  static day = 864e5
  static week = 6048e5
  static month = 2592e6

  static defineCachedGetter(obj, prop, get) {
    // defineGetter(obj, prop, () => {
    //     if (!obj[prop]) {
    //         obj[prop] = get()
    //     }
    //     return obj[prop]
    // })
    Object.defineProperty(obj, prop, { get })
  }

  static defineGetter(obj, prop, get) {
    Object.defineProperty(obj, prop, { get })
  }

  static startOf(date, unit) {
    // date =
    //     date instanceof ZonedDateTime ? date.clone() : new Date(date.getTime())
    date = new Date(date.getTime())
    switch (unit) {
      case 'year':
        date.setMonth(0)
      // falls through
      case 'month':
        date.setDate(1)
      // falls through
      case 'day':
        date.setHours(0)
      // falls through
      case 'hour':
        date.setMinutes(0)
      // falls through
      case 'minute':
        date.setSeconds(0)
      // falls through
      case 'second':
        date.setMilliseconds(0)
    }
    return date
  }
}
