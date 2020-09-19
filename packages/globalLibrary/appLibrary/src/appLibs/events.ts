import { MomentUtils } from '@app/tools'

export class Events {
  static config = {
    dateFormat: 'dddd, DD MMM, h:mm a',
    // datetime1: '2016-05-05 20:00'
    editDateTimeFormat: 'YYYY-MM-DD HH:mm'
  }

  /**
   * format is "Saturday, 1 Jul, 12:00 am – Monday, 31 Jul, 12:00 am"
   * @param item
   */
  static getDateInfo(item) {
    const start = item.start
    const end = item.end
    // for example: "Saturday, 1 Jul, 12:00 am"
    return {
      startFormat: MomentUtils.toDateString(start, Events.config.dateFormat),
      endFormat: MomentUtils.toDateString(end, Events.config.dateFormat)
    }
  }

  static updateDate(oldValue, value, mode) {
    const mDate = MomentUtils.createMomentInstance(oldValue)
    if (mode === 'time') {
      mDate.hour(value.hour)
      mDate.minute(value.minute)
    } else {
      mDate.year(value.year)
      mDate.month(value.month)
      mDate.date(value.day)
    }
    // const x = mDate.toISOString()
    return mDate.toDate()
  }

  static getWantBody(event) {
    let html = event.want
    if (html) {
      html = '<p>' + html.replace('\n' + '\n', '</p><p>') + '</p>'
    }
    const htmlBody = { __html: html }
    return htmlBody
  }

  static toEditDateTimeString(date): string {
    return MomentUtils.toDateString(date, Events.config.editDateTimeFormat) as string
  }
}
