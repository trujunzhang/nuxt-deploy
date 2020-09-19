/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelUsers extends IRealmBaseModel {
  username: string
  displayName: string
  loginType: string
  email: string
  emailVerified?: boolean
  // social
  facebook_id?: string
  twitter_id?: string
  twitterHandle?: string
  // User profile background
  coverId?: string
  coverUrls?: any
  // Linking
  facebookLinked?: boolean
  twitterLinked?: boolean
  authData?: string
}
