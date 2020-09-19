import * as Types from '@app/types'
import { Parse } from './setup/parseApi'
import { TwitterProvider } from './twitterProvider'
import { AppConstants, StatusConstants } from '@app/types'

/**
 * Here, So important.
 * Because if want to use Parse Api, must initialial it first.
 */
import { ParseClientSetup } from './setup/parseClientSetup'
ParseClientSetup.setupClientParse()

class ParseFile {
  static newFile(file: any) {
    return new Parse.File('image', file)
  }
}

class ParseGeoLocation {
  static newEmptyGeoLocation(): IParseGeoPoint {
    return new Parse.GeoPoint(StatusConstants.emptyLocation)
  }

  static createGeoLocation({ latitude, longitude }): IParseGeoPoint {
    return new Parse.GeoPoint({ latitude, longitude })
  }
}

class ParseObjectUtils {
  static setParseObjectFieldWithoutData(parseType: string, instance, parseInstanceId: string) {
    const { objectSchemaName } = AppConstants.realmObjects[parseType]
    const instanceWithoutData = ParseObjects.getInstanceWithoutData(
      objectSchemaName,
      parseInstanceId
    )
    instance.set(parseType, instanceWithoutData)
  }
}

class ParseQuery extends Parse.Query {
  static orTwoQuery(fQuery, sQuery) {
    return ((Parse as any).Query as any).or(fQuery, sQuery) as any
  }

  static orThreeQuery(fQuery, sQuery, tQuery) {
    return ((Parse as any).Query as any).or(fQuery, sQuery, tQuery) as any
  }
}

class ParseUsers extends Parse.User {
  constructor() {
    super()
  }

  static setUserLoginType(onlineUserObject: IParseUser, loginType: number) {
    const typeString = StatusConstants.USERS.TYPE_TITLES[loginType]
    onlineUserObject.set('loginType', typeString)
  }

  public static async connectFacebook(
    myAuthData: any,
    objectId: string | any
  ): Promise<ParseUsers> {
    const facebookUser: any = new ParseUsers()
    if (!!objectId) {
      facebookUser.id = objectId
    }
    await facebookUser._linkWith('facebook', {
      authData: myAuthData
    })
    return facebookUser
  }

  public static async connectTwitter(myAuthData: any, objectId: string | any): Promise<ParseUsers> {
    const twitterUser: any = new ParseUsers()
    if (!!objectId) {
      twitterUser.id = objectId
    }
    await twitterUser._linkWith(new TwitterProvider(myAuthData), {
      authData: myAuthData
    })
    return twitterUser
  }

  public static async userLogOut() {
    return await Parse.User.logOut()
  }

  public static currentUser(): Parse.User | undefined {
    return Parse.User.current()
  }

  static async destroyWithMasterKey(onlineUserParseObject: IParseUser) {
    await onlineUserParseObject.destroy({
      useMasterKey: true
    })
  }

  static async saveWithMasterKey(onlineUserParseObject: IParseUser) {
    await onlineUserParseObject.save(null, {
      useMasterKey: true
    })
  }
}

class ParseRestaurant extends Parse.Object {
  constructor() {
    super('Restaurant')
  }
}

class ParseEvent extends Parse.Object {
  constructor() {
    super('Event')
  }
}

class ParsePeopleInEvent extends Parse.Object {
  constructor() {
    super('PeopleInEvent')
  }
}

class ParseReview extends Parse.Object {
  constructor() {
    super('Review')
  }
}

class ParseRecipe extends Parse.Object {
  constructor() {
    super('Recipe')
  }
}

class ParseRecord extends Parse.Object {
  constructor() {
    super('Record')
  }
}

class ParsePhoto extends Parse.Object {
  constructor() {
    super('Photo')
  }
}

class ParseCloud {
  // static async getListPhotosDict(data) {
  //   return  {}
  //  }

  static async getListPhotosDict(data) {
    return await Parse.Cloud.run('photoListUrls', data, {
      error: (error) => {
        const errorData = data
      }
    })
  }

  static async run(name, data, options = {}) {
    return await Parse.Cloud.run(name, data, options)
  }
}

function createParseInstance(objectSchemaName): any {
  switch (objectSchemaName) {
    case Types.model.PARSE_USERS:
      return new ParseUsers()
    case Types.model.PARSE_RESTAURANTS:
      return new ParseRestaurant()
    case Types.model.PARSE_EVENTS:
      return new ParseEvent()
    case Types.model.PARSE_RECORDS:
      return new ParseRecord()
    case Types.model.PARSE_REVIEWS:
      return new ParseReview()
    case Types.model.PARSE_PHOTOS:
      return new ParsePhoto()
    case Types.model.PARSE_RECIPES:
      return new ParseRecipe()
    case Types.model.PARSE_PEOPLE_IN_EVENTS:
      return new ParsePeopleInEvent()
    default:
      throw new Error(`No matched ${objectSchemaName} to create new Parse Object Instance!`)
  }
}

function appendGeoLocation(
  onlineParseObject: IParseObject,
  localRecorder,
  field: string = 'geoLocation'
) {
  const geoLocation = new Parse.GeoPoint({
    latitude: localRecorder.latitude,
    longitude: localRecorder.longitude
  })
  onlineParseObject.set(field, geoLocation)
}

function getInstanceWithoutData(objectSchemaName: string, parseInstanceId) {
  let relatedObject: any = null
  switch (objectSchemaName) {
    case Types.model.PARSE_RESTAURANTS:
      relatedObject = (ParseRestaurant as any).createWithoutData(parseInstanceId)
      break
    case Types.model.PARSE_EVENTS:
      relatedObject = (ParseEvent as any).createWithoutData(parseInstanceId)
      break
    case Types.model.PARSE_RECIPES:
      relatedObject = (ParseRecipe as any).createWithoutData(parseInstanceId)
      break
    case Types.model.PARSE_USERS:
      relatedObject = (ParseUsers as any).createWithoutData(parseInstanceId)
      break
    case Types.model.PARSE_REVIEWS:
      relatedObject = (ParseReview as any).createWithoutData(parseInstanceId)
      break
    case Types.model.PARSE_PHOTOS:
      relatedObject = (ParsePhoto as any).createWithoutData(parseInstanceId)
      break
    default:
      throw new Error(`No matched ${objectSchemaName} to create Parse instance without data!`)
  }
  return relatedObject
}

function getQueryByObjectSchemaName(type: string, includes: string[] = []): IParseQuery {
  let query: IParseQuery

  switch (type) {
    case Types.model.PARSE_RESTAURANTS:
      query = new Parse.Query(ParseRestaurant).include('listPhoto')
      break
    case Types.model.PARSE_EVENTS:
      query = new Parse.Query(ParseEvent)
      break
    case Types.model.PARSE_USERS:
      query = new Parse.Query(ParseUsers).include('listPhoto')
      break
    case Types.model.PARSE_PEOPLE_IN_EVENTS:
      query = new Parse.Query(ParsePeopleInEvent)
      break
    case Types.model.PARSE_REVIEWS:
      query = new Parse.Query(ParseReview)
      break
    case Types.model.PARSE_RECIPES:
      query = new Parse.Query(ParseRecipe).include('listPhoto')
      break
    case Types.model.PARSE_RECORDS:
      query = new Parse.Query(ParseRecord)
        .include('user')
        .include('photo')
        .include('photo.restaurant')
        .include('photo.recipe')
        .include('photo.user')
        .include('photo.creator')
        .include('restaurant')
        .include('restaurant.creator')
        .include('event')
        .include('event.restaurant')
        .include('event.creator')
        .include('peopleInEvent')
        .include('peopleInEvent.restaurant')
        .include('peopleInEvent.event')
        .include('peopleInEvent.user')
        .include('peopleInEvent.recipes')
        .include('recipe')
        .include('recipe.restaurant')
        .include('recipe.event')
        .include('recipe.creator')
        .include('review')
        .include('review.restaurant')
        .include('review.event')
        .include('review.recipe')
        .include('review.creator')
      break
    case Types.model.PARSE_PHOTOS:
      query = new Parse.Query(ParsePhoto)
      break
    default:
      throw new Error('No matched parseType to create parse without data!')
  }

  const relationsArray: string[] = includes
  switch (type) {
    case Types.model.PARSE_RECORDS:
      break
    default:
      relationsArray.push('creator')
      relationsArray.push('creator.listPhoto')
      break
  }

  relationsArray.map((include) => {
    query = query.include(include)
  })

  return query
}

const cloudEmailTemplateNames = {}

const parseCloudMethodNames = {}

export const ParseObjects = {
  ParseObjectUtils,
  ParseFile,
  ParseGeoLocation,
  ParseQuery,
  ParseRestaurant,
  ParseEvent,
  ParsePeopleInEvent,
  ParseUsers,
  ParseReview,
  ParseRecipe,
  ParseRecord,
  ParsePhoto,
  ParseCloud,
  createParseInstance,
  getInstanceWithoutData,
  appendGeoLocation,
  getQueryByObjectSchemaName,
  cloudEmailTemplateNames,
  parseCloudMethodNames
}
