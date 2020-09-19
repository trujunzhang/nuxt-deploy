import passport from 'passport' // without '* as'
import { facebookConfig, twitterConfig } from '@app/types'

const TwitterTokenStrategy = require('passport-twitter-token')

const FacebookStrategy = require('passport-facebook').Strategy

export function passportConfig() {
  passport.use(
    new TwitterTokenStrategy(
      {
        consumerKey: twitterConfig.consumerKey,
        consumerSecret: twitterConfig.consumerSecret,
        includeEmail: true
      },
      (token, tokenSecret, profile, done) => {
        return done(null, profile)
        // User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
        //   return done(err, user);
        // });
      }
    )
  )
  passport.use(
    new FacebookStrategy(
      {
        // pull in our app id and secret from our auth.js file
        clientID: facebookConfig.facebook_appId,
        clientSecret: facebookConfig.facebook_secret,
        callbackURL: facebookConfig.facebook_callbackURL
      },
      (token, tokenSecret, profile, done) => {
        return done(null, profile)
        // User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
        //   return done(err, user);
        // });
      }
    )
  )
}
