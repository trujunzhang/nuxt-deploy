import md5 from 'blueimp-md5'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/timeago_helper'

export const getMd5Str = (str: string) => {
  const digest = md5(str)
  return digest
}

export const documentIdFromCurrentDate = () => {
  const str = getDateStringForCreatedOrUpdatedDate()
  return getMd5Str(str)
}
