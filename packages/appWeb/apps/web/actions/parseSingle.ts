import { ParseObjectSingleFetcher } from '@web/actions/utils'
import { ParseModels, ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import * as Types from '@app/types'

async function _loadParseObject(params: IWebParseSingleLoadParseObjectParams) {
  const instance = new ParseObjectSingleFetcher(params)
  await instance.fetch(params)
  const action = instance.end()
  return Promise.resolve(action)
}

function loadParseObject(params: IWebParseSingleLoadParseObjectParams) {
  const {
    query,
    parseId,
    terms,
    parseFun,
    afterFetchHookType,
    type = Types.common.OVERLAY_LOADED_MODEL_PAGE
  } = params
  // type: string = Types.common.OVERLAY_LOADED_MODEL_PAGE
  return (dispatch) => {
    const action = _loadParseObject({ query, parseId, terms, parseFun, afterFetchHookType, type })
    action.then((result) => {
      dispatch(result)
    })
    return action
  }
}

// ===========================================================
// ===========================================================
//  *** Load single model ***
// ===========================================================
// ===========================================================
export function loadUserProfilePage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_USERS),
    parseId,
    terms: { singleObjectId: parseId },
    parseFun: ParseModels.fromParseUsers,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL
  })
}

export function loadRestaurantPage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RESTAURANTS),
    parseId,
    terms: { singleUniqueId: parseId },
    parseFun: ParseModels.fromParseRestaurant,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL
  })
}

export function loadEventPage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_EVENTS, [
      'restaurant',
      'restaurant.listPhoto'
    ]),
    parseId,
    terms: { singleUniqueId: parseId },
    parseFun: ParseModels.fromParseEvent,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL
  })
}

export function loadPeopleInEventPage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PEOPLE_IN_EVENTS, [
      'user',
      'user.listPhoto',
      'event',
      'restaurant',
      'recipes',
      'recipes.listPhoto'
    ]),
    parseId,
    terms: { singleObjectId: parseId },
    parseFun: ParseModels.fromParsePeopleInEvent,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL
  })
}

export function loadOrderedRecipePage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECIPES, ['restaurant']),
    parseId,
    terms: { singleUniqueId: parseId },
    parseFun: ParseModels.fromParseRecipe,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL
  })
}

export function loadReviewPage(parseId: string) {
  return loadParseObject({
    query: ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_REVIEWS, [
      'restaurant',
      'event',
      'recipe'
    ]),
    parseId,
    terms: { singleUniqueId: parseId },
    parseFun: ParseModels.fromParseReview
  })
}

export function resetLoadPage(Action) {
  return {
    type: Types.common.OVERLAY_LOADED_MODEL_RESET
  }
}
