import * as Types from '@app/types'

import { StatusConstants, ParseModelsHelper } from '@app/types'
import { SlugifyUtils } from '@app/tools'

import { RecipeUniqueIdsHelper } from './index'

export class ParseModels {
  private static __fromParseCommon(map: IParseObject): IParseCommonModel {
    return {
      id: map.id,
      uniqueId: ParseModelsHelper.getUniqueId(map),
      createdAt: map.get('createdAt'),
      updatedAt: map.get('updatedAt'),
      syncPostedAt: ParseModelsHelper.getSyncPostedAt(map),
      flag: map.get('flag') || StatusConstants.FLAGS.FLAGS_STATUS_SUBMITTED,
      // Creator
      creator: map.get('creator') && ParseModels.fromParseUsers(map.get('creator'))
    }
  }

  static parseFromParseUsers(map: IParseUser): IParseModelUsers {
    let commonUserModel = ParseModels.__fromParseCommon(map)
    /**
     *  10/12/2018:
     *
     *    Here, 'uniqueId' is the same as 'id'.
     **/
    commonUserModel = {
      ...commonUserModel,
      uniqueId: commonUserModel.id
    }
    const username = map.get('username') || ''
    const model: IParseModelUsers = {
      // Basic Fields
      ...commonUserModel,
      // Attributes
      username,
      displayName: map.get('username'),
      slug: map.get('slug') || SlugifyUtils.toSlugifyString(username),
      loginType: map.get('loginType'),
      email: map.get('email') || '',
      objectSchemaName: Types.model.PARSE_USERS,
      // social
      facebook_id: map.get('facebook_id') || '',
      twitter_id: map.get('twitter_id') || '',
      twitterHandle: map.get('twitterHandle') || '',
      // Linking
      facebookLinked: (map as any)._isLinked('facebook'),
      twitterLinked: (map as any)._isLinked('twitter'),
      authData: map.get('authData'),
      // Verification
      sign_up_email_verify_token: map.get('sign_up_email_verify_token') || '',
      sign_up_email_verify_token_expires_at:
        map.get('sign_up_email_verify_token_expires_at') || new Date(),
      deletion_email_verify_token: map.get('deletion_email_verify_token') || '',
      deletion_email_verify_token_expires_at:
        map.get('deletion_email_verify_token_expires_at') || new Date(),
      reset_email_verify_token: map.get('reset_email_verify_token') || '',
      reset_email_verify_token_expires_at:
        map.get('reset_email_verify_token_expires_at') || new Date()
    }

    return model
  }

  static fromParseUsers(map: IParseUserWithUndefined): ParseModelUsersWithNull {
    if (!!map) {
      return ParseModels.parseFromParseUsers(map)
    }
    return null
  }

  static parsePhotoNormal(map: IParseObject): IParsePhotosNormal {
    return {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      originalUrl: map.get('originalUrl'),
      thumbnailUrl: map.get('thumbnailUrl'),
      photoType: map.get('photoType')
    }
  }

  static fromParsePhoto(map: IParseObject): IParseModelPhotos {
    const instance = {
      ...ParseModels.parsePhotoNormal(map),
      // Relations
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      event: map.get('event') && ParseModels.fromParseEvent(map.get('event')),
      recipe: map.get('recipe') && ParseModels.fromParseRecipe(map.get('recipe')),
      user: map.get('user') && ParseModels.fromParseUsers(map.get('user')),
      objectSchemaName: Types.model.PARSE_PHOTOS
    }
    return instance
  }

  static fromParseRecipe(map: IParseObject): IParseModelRecipes {
    return {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      displayName: map.get('displayName'),
      price: map.get('price'),
      // Relations
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      objectSchemaName: Types.model.PARSE_RECIPES
    }
  }

  static fromParseEvent(map: IParseObject): IParseModelEvents {
    return {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      displayName: map.get('displayName'),
      slug: map.get('slug'),
      start: map.get('start'),
      end: map.get('end'),
      want: map.get('want'),
      // Pointer
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      objectSchemaName: Types.model.PARSE_EVENTS
    }
  }

  static fromParseRestaurant(map: IParseObject): IParseModelRestaurants {
    return {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      displayName: map.get('displayName') || '',
      geoLocation: map.get('geoLocation'),
      // Google address
      address: map.get('address') || '',
      street_number: map.get('street_number') || '',
      route: map.get('route') || '',
      locality: map.get('locality') || '',
      sublocality: map.get('sublocality') || '',
      country: map.get('country') || '',
      postal_code: map.get('postal_code') || '',
      administrative_area: map.get('administrative_area') || '',
      objectSchemaName: Types.model.PARSE_RESTAURANTS
    }
  }

  static fromParsePeopleInEvent(map: IParseObject): IParseModelPeopleInEvent {
    const recipeUniqueIds = RecipeUniqueIdsHelper.getRecipeUniqueIdsStringFromParseRecipes(
      map.get('recipes') || []
    )

    const model: IParseModelPeopleInEvent = {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      // ...
      // Pointer
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      event: map.get('event') && ParseModels.fromParseEvent(map.get('event')),
      user: map.get('user') && ParseModels.parseFromParseUsers(map.get('user')),
      recipes: (map.get('recipes') || []).map(ParseModels.fromParseRecipe),
      recipeUniqueIds,
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS
    }
    return model
  }

  static fromParseReview(map: IParseObject): IParseModelReviews {
    const model: IParseModelReviews = {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      rate: map.get('rate'),
      body: map.get('body'),
      reviewType: map.get('reviewType'),
      // Pointer
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      event: map.get('event') && ParseModels.fromParseEvent(map.get('event')),
      recipe: map.get('recipe') && ParseModels.fromParseRecipe(map.get('recipe')),
      objectSchemaName: Types.model.PARSE_REVIEWS
    }
    return model
  }

  static parseOnlineParseObject(objectSchemaName: string, map): AppParseModels {
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        return ParseModels.fromParseRestaurant(map)
      case Types.model.PARSE_PEOPLE_IN_EVENTS:
        return ParseModels.fromParsePeopleInEvent(map)
      case Types.model.PARSE_EVENTS:
        return ParseModels.fromParseEvent(map)
      case Types.model.PARSE_RECIPES:
        return ParseModels.fromParseRecipe(map)
      case Types.model.PARSE_PHOTOS:
        return ParseModels.fromParsePhoto(map)
      case Types.model.PARSE_USERS:
        return ParseModels.parseFromParseUsers(map)
      case Types.model.PARSE_REVIEWS:
        return ParseModels.fromParseReview(map)
      default:
        throw new Error('No matched objectSchemaName to parse online object!')
    }
  }

  static fromParseRecord(map: IParseObject): IParseModelRecord {
    return {
      // Basic Fields
      ...ParseModels.__fromParseCommon(map),
      // Attributes
      recordType: map.get('recordType'),
      removedObjectUniqueId: map.get('removedObjectUniqueId') || '',
      // Pointer
      user: map.get('user') && ParseModels.fromParseUsers(map.get('user')),
      restaurant: map.get('restaurant') && ParseModels.fromParseRestaurant(map.get('restaurant')),
      event: map.get('event') && ParseModels.fromParseEvent(map.get('event')),
      peopleInEvent:
        map.get('peopleInEvent') && ParseModels.fromParsePeopleInEvent(map.get('peopleInEvent')),
      recipe: map.get('recipe') && ParseModels.fromParseRecipe(map.get('recipe')),
      photo: map.get('photo') && ParseModels.fromParsePhoto(map.get('photo')),
      review: map.get('review') && ParseModels.fromParseReview(map.get('review'))
    }
  }
}
