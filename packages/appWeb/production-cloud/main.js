"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webcloud_1 = require("@app/webcloud");
// tslint:disable-next-line:variable-name
Parse.Cloud.define('hello', (_request, response) => {
    // Requires two packages to make this happen.
    return 'Hello world, trujunzhang!';
});
// ===========================================================
// ===========================================================
//  *** Setup ***
// ===========================================================
// ===========================================================
webcloud_1.InvokeCloudinary.setupCloudinary();
// ===========================================================
// ===========================================================
//  *** Defines ***
// ===========================================================
// ===========================================================
// =====================================
// Get Address From Location ===========
// =====================================
const getAddressFromLocation = new webcloud_1.GetAddressFromLocation('getAddressFromLocation');
Parse.Cloud.define(getAddressFromLocation.getFunctionName(), getAddressFromLocation.handler);
// =====================================
// Upload Images =======================
// =====================================
const invokeCloudinary = new webcloud_1.InvokeCloudinary('invokeCloudinary');
Parse.Cloud.define(invokeCloudinary.getFunctionName(), invokeCloudinary.handler);
const statisticUserState = new webcloud_1.StatisticUserState('statisticUserState');
Parse.Cloud.define(statisticUserState.getFunctionName(), statisticUserState.handler);
const statisticReviews = new webcloud_1.StatisticReviews('statisticReviews');
Parse.Cloud.define(statisticReviews.getFunctionName(), statisticReviews.handler);
const queryObjectIdByUniqueId = new webcloud_1.QueryObjectIdByUniqueId('queryObjectIdByUniqueId');
Parse.Cloud.define(queryObjectIdByUniqueId.getFunctionName(), queryObjectIdByUniqueId.handler);
const photoListUrls = new webcloud_1.PhotoListUrls('photoListUrls');
Parse.Cloud.define(photoListUrls.getFunctionName(), photoListUrls.handler);
// =====================================
// Send emails =========================
// =====================================
const sendEmails = new webcloud_1.SendEmails('sendEmails');
Parse.Cloud.define(sendEmails.getFunctionName(), sendEmails.handler);
// ===========================================================
// ===========================================================
//  *** afterDelete ***
// ===========================================================
// ===========================================================
const afterSaveRestaurant = new webcloud_1.AfterSaveRestaurant('Restaurant');
Parse.Cloud.afterSave(afterSaveRestaurant.getParseClass(), afterSaveRestaurant.handler);
const afterSavePhoto = new webcloud_1.AfterSavePhoto('Photo');
Parse.Cloud.afterSave(afterSavePhoto.getParseClass(), afterSavePhoto.handler);
