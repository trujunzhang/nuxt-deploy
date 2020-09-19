import * as Types from '../types'

import * as ServerConstants from '../server'

export class AppConstants {
  static parseApi = {
    applicationId: 'YJ60VCiTAD01YOA3LJtHQlhaLjxiHSsv4mkxKvVM',
    javaScriptKey: '3S9VZj8y9g0Tj1WS64dl19eDJrEVpvckG7uhcXIi',
    masterKey: '87rxX8J0JwaaPSBxY9DdKJEqWXByqE7sShRsX4vg',
    restAPIKey: 'gQTEnIKaDWgZ4UiUZGQqN7qkkvtMCOobQEIb1kYy'
  }

  static get ieattaWeb() {
    return ServerConstants.webDomain
  }

  static get parseServerURL(): string {
    return ServerConstants.getServerURLForParse()
  }

  static realmObjects = {
    // Only access online.
    user: {
      objectSchemaName: Types.model.PARSE_USERS,
      sort: -1,
      relateds: []
    },
    record: {
      objectSchemaName: Types.model.PARSE_RECORDS,
      sort: -1,
      relateds: []
    },
    restaurant: {
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      sort: 1,
      relateds: []
    },
    event: {
      objectSchemaName: Types.model.PARSE_EVENTS,
      sort: 2,
      relateds: ['restaurant']
    },
    recipe: {
      objectSchemaName: Types.model.PARSE_RECIPES,
      sort: 3,
      relateds: ['restaurant']
    },
    peopleInEvent: {
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
      sort: 4,
      relateds: ['restaurant', 'event', 'user', 'recipe']
    },
    photo: {
      objectSchemaName: Types.model.PARSE_PHOTOS,
      sort: 5,
      relateds: ['restaurant', 'recipe', 'user']
    },
    review: {
      objectSchemaName: Types.model.PARSE_REVIEWS,
      sort: 6,
      relateds: ['restaurant', 'event', 'recipe']
    }
  }

  static realmTypes = {
    PARSE_RECORDS: 'record',
    PARSE_RESTAURANTS: 'restaurant',
    PARSE_EVENTS: 'event',
    PARSE_PEOPLE_IN_EVENTS: 'peopleInEvent',
    PARSE_USERS: 'user',
    PARSE_RECIPES: 'recipe',
    PARSE_PHOTOS: 'photo',
    PARSE_REVIEWS: 'review'
  }

  static realmObjectTypes = {
    PARSE_RECORDS: 'Records',
    PARSE_RESTAURANTS: 'Restaurants',
    PARSE_EVENTS: 'Events',
    PARSE_PEOPLE_IN_EVENTS: 'PeopleInEvents',
    PARSE_USERS: 'Users',
    PARSE_RECIPES: 'Recipes',
    PARSE_PHOTOS: 'Photos',
    PARSE_REVIEWS: 'Reviews'
  }

  static pageDetailsPages = {
    PARSE_RESTAURANTS: 'Restaurant',
    PARSE_EVENTS: 'Event',
    PARSE_RECORDS: 'Record',
    PARSE_PEOPLE_IN_EVENTS: 'OrderedUser',
    PARSE_USERS: 'User',
    PARSE_RECIPES: 'OrderedRecipe',
    PARSE_PHOTOS: 'Photo',
    PARSE_REVIEWS: 'Review'
  }

  static SubDomainRecipesList = {
    PARSE_RESTAURANTS: 'biz_recipes'
  }

  static SubDomainPhotos = {
    PARSE_RESTAURANTS: 'biz_photos',
    PARSE_RECIPES: 'recipe_photos',
    PARSE_USERS: 'user_local_photos'
  }

  static getRealmRecordSortType(recordType): number {
    return AppConstants.realmObjects[recordType].sort
  }
}
