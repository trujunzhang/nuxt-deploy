import * as Types from '@app/types'

const initialState: IRealmModelState = {
  // isPhotoBrowser: false,
  isPhotoBrowser: true,
  nearRestaurants: [],
  searchRestaurants: [],
  searchUsers: [],
  searchRecipes: [],
  events: [],
  peopleInEvents: [],
  restaurantPhoto: {},
  photosBrowser: {},
  photosForObject: {},
  refreshPageObject: null
}

export function realmModelsReducer(state = initialState, action: any) {
  if (action.type === Types.realmQuery.SEARCH_RESTAURANTS_PAGE) {
    const nextState = Object.assign({}, state, {
      searchRestaurants: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_NEAR_RESTAURANTS) {
    const nextState = Object.assign({}, state, {
      nearRestaurants: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_EVENTS_FOR_RESTAURANT) {
    const nextState = Object.assign({}, state, {
      events: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_PEOPLE_IN_EVENT) {
    const nextState = Object.assign({}, state, {
      peopleInEvent: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_PHOTOS_BY_TYPE) {
    const nextState = Object.assign({}, state, {
      photosForObject: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_USERS_FOR_EVENT) {
    const nextState = Object.assign({}, state, {
      usersInEvent: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_RECIPES_FOR_USER) {
    const nextState = Object.assign({}, state, {
      orderedRecipes: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_SEARCH_USERS) {
    const nextState = Object.assign({}, state, {
      searchUsers: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_SEARCH_RECIPES) {
    const nextState = Object.assign({}, state, {
      searchRecipes: action.payload
    })
    return nextState
  }
  if (action.type === Types.realmQuery.QUERY_REVIEWS) {
    const nextState = Object.assign({}, state, {
      reviews: action.payload
    })
    return nextState
  }
  if (action.type === Types.photoBrowser.PHOTO_BROWSER_OPEN) {
    const nextState = Object.assign({}, state, {
      isPhotoBrowser: true,
      photosBrowser: action.payload
    })
    return nextState
  }
  if (action.type === Types.photoBrowser.PHOTO_BROWSER_CLOSE) {
    const nextState = Object.assign({}, state, {
      isPhotoBrowser: false,
      photosBrowser: {}
    })
    return nextState
  }
  if (action.type === Types.pagesAction.PAGES_REFRESH_NOTIFY) {
    const nextState = Object.assign({}, state, {
      refreshPageObject: action.payload
    })
    // debugger
    return nextState
  }

  return state
}
