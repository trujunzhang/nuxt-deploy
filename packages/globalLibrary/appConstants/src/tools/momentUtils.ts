import * as moment from 'moment'

import { ParseModelsHelper } from '../parse'

export class MomentUtils {
  static getDate(dateString: string): Date {
    return moment(dateString).toDate()
  }

  static getValidTokenDate(dayNumber: number = 2): Date {
    let validDate = moment(new Date())
    validDate = validDate.add(dayNumber, 'day')
    return validDate.toDate()
  }

  static convertToEventDate(value): Date {
    return moment(value).toDate()
  }

  static toDateString(date: Date, dateFormat: string): string {
    return moment(date).format(dateFormat)
  }

  static getThisYearString(): string {
    return moment(new Date()).format('YYYY')
  }

  static createMomentInstance(value): moment.Moment {
    return moment(value)
  }

  static createTodayMomentInstance(): moment.Moment {
    return moment(new Date()) // today
  }

  static isSame(first, second): boolean {
    return moment(first).isSame(moment(second))
  }

  static isBefore(params: ISyncPostedAtHelperNeedUpdateLocalRealmObjectParams): boolean {
    const { lastRealmObject, recordedParseModel } = params
    const serverSyncPostedAt = recordedParseModel.syncPostedAt
    const localSyncPostedAt = lastRealmObject.syncPostedAt

    const result = moment(localSyncPostedAt).isBefore(serverSyncPostedAt)
    return result
  }

  static isAfter(params: ISyncPostedAtHelperNeedUpdateOnlineParseObjectParams): boolean {
    const { localRealmModelObject, onlineParseObject } = params
    const serverSyncPostedAt = ParseModelsHelper.getSyncPostedAt(onlineParseObject)
    const localSyncPostedAt = localRealmModelObject.syncPostedAt

    const result = moment(localSyncPostedAt).isAfter(serverSyncPostedAt)
    return result
  }
}
