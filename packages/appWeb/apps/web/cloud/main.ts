import {
  AfterSavePhoto,
  AfterSaveRestaurant,
  GetAddressFromLocation,
  InvokeCloudinary,
  PhotoListUrls,
  QueryObjectIdByUniqueId,
  SendEmails,
  StatisticReviews,
  StatisticUserState
} from '@app/webcloud'

// tslint:disable-next-line:variable-name
Parse.Cloud.define('hello', (_request, response) => {
  // Requires two packages to make this happen.
  return 'Hello world, trujunzhang!'
})

// ===========================================================
// ===========================================================
//  *** Setup ***
// ===========================================================
// ===========================================================
InvokeCloudinary.setupCloudinary()

// ===========================================================
// ===========================================================
//  *** Defines ***
// ===========================================================
// ===========================================================

// =====================================
// Get Address From Location ===========
// =====================================
const getAddressFromLocation = new GetAddressFromLocation('getAddressFromLocation')
Parse.Cloud.define(getAddressFromLocation.getFunctionName(), getAddressFromLocation.handler)

// =====================================
// Upload Images =======================
// =====================================
const invokeCloudinary = new InvokeCloudinary('invokeCloudinary')
Parse.Cloud.define(invokeCloudinary.getFunctionName(), invokeCloudinary.handler)

const statisticUserState = new StatisticUserState('statisticUserState')
Parse.Cloud.define(statisticUserState.getFunctionName(), statisticUserState.handler)
const statisticReviews = new StatisticReviews('statisticReviews')
Parse.Cloud.define(statisticReviews.getFunctionName(), statisticReviews.handler)

const queryObjectIdByUniqueId = new QueryObjectIdByUniqueId('queryObjectIdByUniqueId')
Parse.Cloud.define(queryObjectIdByUniqueId.getFunctionName(), queryObjectIdByUniqueId.handler)

const photoListUrls = new PhotoListUrls('photoListUrls')
Parse.Cloud.define(photoListUrls.getFunctionName(), photoListUrls.handler)

// =====================================
// Send emails =========================
// =====================================
const sendEmails = new SendEmails('sendEmails')
Parse.Cloud.define(sendEmails.getFunctionName(), sendEmails.handler)

// ===========================================================
// ===========================================================
//  *** afterDelete ***
// ===========================================================
// ===========================================================
const afterSaveRestaurant = new AfterSaveRestaurant('Restaurant')
Parse.Cloud.afterSave(afterSaveRestaurant.getParseClass(), afterSaveRestaurant.handler)

const afterSavePhoto = new AfterSavePhoto('Photo')
Parse.Cloud.afterSave(afterSavePhoto.getParseClass(), afterSavePhoto.handler)
