/*
 * issue:  TypeError: moment_1.default is not a function
 *  http://paginaswebpublicidad.com/questions/55915/loi-khi-su-dung-momentjs-trong-thu-vien-angular-typescript
 */
import moment from 'moment' // No require '* as'.

export type MomentInstance = moment.Moment
export type MomentInput = moment.MomentInput
export type MomentFormat = moment.MomentFormatSpecification

/**
 *
 * Globally manage how to new a moment instance.
 *
 * default, Date is now.
 *
 * @param inp
 * @param format
 * @param strict
 */
function newMomentInstance(
  inp?: MomentInput,
  format?: MomentFormat,
  strict?: boolean
): MomentInstance {
  return moment(inp || new Date(), format, strict)
}

export class MomentUtils {
  static getDate(inp?: MomentInput): Date {
    return newMomentInstance(inp).toDate()
  }

  static getValidTokenDate(dayNumber: number): Date {
    let validDate: MomentInstance = newMomentInstance()
    validDate = validDate.add(dayNumber, 'day')
    return validDate.toDate()
  }

  static convertToEventDate(inp?: MomentInput): Date {
    return newMomentInstance(inp).toDate()
  }

  static toDateIOSString(inp?: MomentInput) {
    return newMomentInstance(inp).toISOString()
  }

  /**
   * Issue(22/01/2019)
   *   Deprecation warning: value provided is not in a recognized RFC2822 or ISO format
   * @param date
   * @param dateFormat
   */
  static toDateString(inp: MomentInput, dateFormat: string): string {
    return newMomentInstance(inp, dateFormat).format(dateFormat)
  }

  static getThisYearString(): string {
    return newMomentInstance().format('YYYY')
  }

  static getToday(): MomentInstance {
    return newMomentInstance().startOf('day')
  }

  static createMomentInstance(inp: MomentInput, format?: MomentFormat): MomentInstance {
    return newMomentInstance(inp, format)
  }

  static createTodayMomentInstance(): MomentInstance {
    return newMomentInstance() // today
  }

  static getYearDurationDate(year: any, month: any) {
    const startDate = moment([year, month]).startOf('month')
    const endDate = moment(startDate).endOf('month')
    return {
      startDate,
      endDate
    }
  }

  static getEndOfDayDate(before: MomentInput, dateFormat: string) {
    const mBefore = moment(before, dateFormat)
    const endOfDay = mBefore.endOf('day')
    return endOfDay.toDate()
  }

  static getStartOfDayDate(after: MomentInput, dateFormat: string) {
    const mAfter = moment(after, dateFormat)
    const startOfDay = mAfter.startOf('day')
    return startOfDay.toDate()
  }

  static isSame(first: MomentInput, second: MomentInput): boolean {
    return newMomentInstance(first).isSame(newMomentInstance(second))
  }

  static isBefore(first: MomentInput, second: MomentInput): boolean {
    return newMomentInstance(first).isBefore(newMomentInstance(second))
  }

  static isAfter(first: MomentInput, second: MomentInput): boolean {
    return newMomentInstance(first).isAfter(newMomentInstance(second))
  }

  static getSubtractDayFromNow(amount: number) {
    return newMomentInstance()
      .subtract(amount, 'days')
      .toDate()
  }

  static getBeforeOneDate(amount: number): Date {
    return newMomentInstance()
      .subtract(amount, 'days')
      .startOf('day')
      .toDate()
  }

  static getDuringDateString(beforeAmount: number, afterAmount: number, dateFormat: string) {
    const beforeDate = newMomentInstance() // today
      .subtract(beforeAmount, 'days')
      .startOf('day')
      .toDate()

    const afterDate = newMomentInstance() // before week
      .subtract(afterAmount, 'days')
      .startOf('day')
      .toDate()

    return {
      after: newMomentInstance(afterDate).format(dateFormat),
      before: newMomentInstance(beforeDate).format(dateFormat)
    }
  }
}
