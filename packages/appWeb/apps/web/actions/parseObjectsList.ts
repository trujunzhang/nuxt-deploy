import { ParseUtils } from '@appParse/index' // '@app/library' //  '@app/parse'
import * as Types from '@app/types'
import { LoadRecipeListForEventFetcher, ParseObjectsListFetch } from './utils'

async function _loadRecipeListForEvent(params: IWebParseObjectsListPromiseRecipeForEventParams) {
  const { listTask, objectsQuery, terms, parseSchemaName, afterFetchHookType } = params
  const instance = new LoadRecipeListForEventFetcher(listTask, terms, parseSchemaName)
  await instance.fetch(objectsQuery, afterFetchHookType)
  const action = instance.end()
  return action
}

async function _loadListByType(params: IWebParseObjectsListPromiseListByTypeParams) {
  const instance = new ParseObjectsListFetch(params)
  await instance.fetch()
  const action = instance.end()
  return action
}

function loadListByType(params: IWebParseObjectsListLoadListByTypeParams) {
  const { invokeListFunc = _loadListByType } = params
  return (dispatch) => {
    const action = invokeListFunc(params)
    action.then((result) => {
      // debugger
      dispatch(result)
    })
    return action
  }
}

export function loadRestaurantsList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getRestaurantParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_RESTAURANTS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadEventsList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getEventParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_EVENTS,
    afterFetchHookType: null
  })
}

export function loadPeopleInEventList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getPeopleInEventParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadOtherUsersAlsoOrderedRecipeList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getPeopleInEventParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadReviewsList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getReviewsParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_REVIEWS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadRecipesListForRestaurant(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getRecipesParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_RECIPES,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadRecipesListForEvent(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getPeopleInEventParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_RECIPES,
    invokeListFunc: _loadRecipeListForEvent,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadRecipesListForCreator(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getRecipesParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_RECIPES,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST
  })
}

export function loadPhotosBrowser(terms: IParseQueryBaseTerm) {
  return loadListByType({
    listTask: terms as any,
    objectsQuery: ParseUtils.getPhotosParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_PHOTOS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_BROWSER,
    type: Types.fetch.LIST_VIEW_LOADED_FOR_PHOTOS_LIST
  })
}

export function loadUsersWithoutAnonymousList(params: IWebParseObjectsListBaseParams) {
  const { terms, listTask } = params
  return loadListByType({
    listTask,
    objectsQuery: ParseUtils.getUsersParameters(terms),
    terms,
    parseSchemaName: Types.model.PARSE_USERS,
    afterFetchHookType: Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST,
    type: Types.fetch.LIST_VIEW_LOADED_FOR_ALL_USERS
  })
}
