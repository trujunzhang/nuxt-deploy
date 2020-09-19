import { routePage, ServerRoutePathHelper } from './utils'

export class EventsPages {
  static home = {
    name: 'eventSingle',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.EVENT_SINGLE_PAGE),
    // pattern: '/events/:forObjectUniqueId/:eslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.EVENT_SINGLE_PAGE)
    // page: 'eventSingle'
  }

  static eventNew = {
    name: 'organizationEventNew',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.EVENT_NEW_PAGE),
    // pattern: '/organization/event/new/:modelType/:forObjectId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.EVENT_NEW_PAGE)
    // page: 'editEventForm'
  }

  static edit = {
    name: 'eventEdit',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.EVENT_EDIT_PAGE),
    // pattern: '/edit/event/:forObjectUniqueId/:eslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.EVENT_EDIT_PAGE)
    // page: 'eventEdit'
  }

  static orderedUser = {
    name: 'ordereduserProfileSingle',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.PEOPLE_IN_EVENT_PAGE),
    // pattern: '/ordereduser/:peopleInEventId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.PEOPLE_IN_EVENT_PAGE)
    // page: 'orderedUserSingle'
  }

  static eventsForUser = {
    name: 'organizationEventForUser',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.EVENT_ORGANIZATION_FOR_USER_PAGE),
    // pattern: '/organization/event/users/:forObjectUniqueId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.EVENT_ORGANIZATION_FOR_USER_PAGE)
    // page: 'organizationEventForUser'
  }

  static eventsForUserSelectedUserPage = {
    pattern: `${EventsPages.eventsForUser.pattern}?userId=:userId`
  }
}
