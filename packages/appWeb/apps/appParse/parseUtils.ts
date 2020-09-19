import * as Parameters from '@appParameters/index'

import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

export class ParseUtils {
  static getRestaurantParameters(terms) {
    return new Parameters.RestaurantsParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RESTAURANTS)
    )
      .addParameters(terms)
      .end()
  }

  static getEventParameters(terms) {
    return new Parameters.EventsParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_EVENTS, [
        'restaurant',
        'restaurant.listPhoto'
      ])
    )
      .addParameters(terms)
      .end()
  }

  static getUsersParameters(terms) {
    return new Parameters.UsersParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_USERS)
    )
      .addParameters(terms)
      .end()
  }

  static getPeopleInEventParameters(terms) {
    return new Parameters.PeopleInEventParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PEOPLE_IN_EVENTS, [
        'user',
        'user.listPhoto',
        'event',
        'restaurant',
        'recipes'
      ])
    )
      .addParameters(terms)
      .end()
  }

  static getReviewsParameters(terms) {
    return new Parameters.ReviewsParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_REVIEWS, [
        'restaurant',
        'restaurant.listPhoto',
        'event',
        'event.restaurant',
        'recipe',
        'recipe.listPhoto',
        'user',
        'user.listPhoto'
      ])
    )
      .addParameters(terms)
      .end()
  }

  static getRecipesParameters(terms) {
    return new Parameters.RecipesParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECIPES, [
        'restaurant',
        'event',
        'recipe',
        'user',
        'user.listPhoto'
      ])
    )
      .addParameters(terms)
      .end()
  }

  static getPhotosParameters(terms, haveRelations = true) {
    const relations = haveRelations ? ['restaurant', 'recipe', 'user'] : []
    return new Parameters.PhotosParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PHOTOS, relations)
    )
      .addParameters(terms)
      .end()
  }

  static getRecordsParameters(terms = {}) {
    return new Parameters.RecordsParameters(
      ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECORDS)
    )
      .addParameters(terms)
      .end()
  }

  static async checkExistOnlineParseInstance(objectSchemaName: string, realmInstance) {
    return (
      (await ParseObjects.getQueryByObjectSchemaName(objectSchemaName)
        .equalTo('uniqueId', realmInstance.uniqueId)
        .count()) > 0
    )
  }
}
