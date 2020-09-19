"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport")); // without '* as'
const types_1 = require("@app/types");
const TwitterTokenStrategy = require('passport-twitter-token');
const FacebookStrategy = require('passport-facebook').Strategy;
function passportConfig() {
    passport_1.default.use(new TwitterTokenStrategy({
        consumerKey: types_1.twitterConfig.consumerKey,
        consumerSecret: types_1.twitterConfig.consumerSecret,
        includeEmail: true
    }, (token, tokenSecret, profile, done) => {
        return done(null, profile);
        // User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
        //   return done(err, user);
        // });
    }));
    passport_1.default.use(new FacebookStrategy({
        // pull in our app id and secret from our auth.js file
        clientID: types_1.facebookConfig.facebook_appId,
        clientSecret: types_1.facebookConfig.facebook_secret,
        callbackURL: types_1.facebookConfig.facebook_callbackURL
    }, (token, tokenSecret, profile, done) => {
        return done(null, profile);
        // User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
        //   return done(err, user);
        // });
    }));
}
exports.passportConfig = passportConfig;
