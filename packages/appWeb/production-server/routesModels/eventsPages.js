"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class EventsPages {
}
exports.EventsPages = EventsPages;
EventsPages.home = {
    name: 'eventSingle',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.EVENT_SINGLE_PAGE),
    // pattern: '/events/:forObjectUniqueId/:eslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.EVENT_SINGLE_PAGE)
    // page: 'eventSingle'
};
EventsPages.eventNew = {
    name: 'organizationEventNew',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.EVENT_NEW_PAGE),
    // pattern: '/organization/event/new/:modelType/:forObjectId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.EVENT_NEW_PAGE)
    // page: 'editEventForm'
};
EventsPages.edit = {
    name: 'eventEdit',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.EVENT_EDIT_PAGE),
    // pattern: '/edit/event/:forObjectUniqueId/:eslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.EVENT_EDIT_PAGE)
    // page: 'eventEdit'
};
EventsPages.orderedUser = {
    name: 'ordereduserProfileSingle',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.PEOPLE_IN_EVENT_PAGE),
    // pattern: '/ordereduser/:peopleInEventId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.PEOPLE_IN_EVENT_PAGE)
    // page: 'orderedUserSingle'
};
EventsPages.eventsForUser = {
    name: 'organizationEventForUser',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.EVENT_ORGANIZATION_FOR_USER_PAGE),
    // pattern: '/organization/event/users/:forObjectUniqueId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.EVENT_ORGANIZATION_FOR_USER_PAGE)
    // page: 'organizationEventForUser'
};
EventsPages.eventsForUserSelectedUserPage = {
    pattern: `${EventsPages.eventsForUser.pattern}?userId=:userId`
};
