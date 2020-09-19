import { UnderscoreUtils } from '@app/tools'
import * as Types from '../index'

export class StatusConstants {
  static fetchedGoogleReverseModelError = 'Reverse Geocode failure!'

  static reviewDefaultSortTag = 'REVIEW_SORT_NORMAL'

  static SORT_TAGS = {
    REVIEW_SORT_NORMAL: 'normal',
    REVIEW_SORT_NEWEST: 'newest',
    REVIEW_SORT_OLDEST: 'oldest',
    REVIEW_SORT_HIGHEST: 'highest',
    REVIEW_SORT_LOWEST: 'lowest'
  }

  static getDefaultReviewSort() {
    return StatusConstants.SORT_TAGS[StatusConstants.reviewDefaultSortTag]
  }

  static getSortTag(sort) {
    return UnderscoreUtils.invertObject(StatusConstants.SORT_TAGS)[sort]
  }

  static FLAGS = {
    FLAGS_STATUS_SUBMITTED: '1',
    FLAGS_STATUS_DELETED: '0'
  }

  static parseObjectFlags = {
    PARSE_OBJECT_FLAG_NORMAL: StatusConstants.FLAGS.FLAGS_STATUS_SUBMITTED,
    PARSE_OBJECT_FLAG_REMOVED: StatusConstants.FLAGS.FLAGS_STATUS_DELETED
  }

  static appDefaultLoginType = 'email'

  static adjustCloudinaryAndEmbedlyUrl(source: string) {
    return source
  }

  static APP_DEFAULT_USER: IParseModelUsers = {
    id: 'default-00001',
    uniqueId: 'unique-00001',
    username: 'Politicl',
    slug: 'politicl',
    displayName: 'user',
    email: '',
    loginType: StatusConstants.appDefaultLoginType,
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: StatusConstants.FLAGS.FLAGS_STATUS_SUBMITTED,
    facebookLinked: false,
    twitterLinked: false,
    objectSchemaName: Types.model.PARSE_USERS
  }

  static USERS = {
    TYPE_EMAIL: 1,
    TYPE_TWITTER: 2,
    TYPE_FACEBOOK: 3,
    TYPE_GOOGLE: 4,
    TYPE_GITHUB: 5,
    TYPE_LINKEDIN: 6,
    TYPE_TITLES: ['', 'email', 'twiter', 'facebook', 'google', 'github', 'linkedin']
  }

  static emptyLocation = {
    latitude: 0,
    longitude: 0
  }
}
