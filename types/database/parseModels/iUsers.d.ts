/// <reference path="iParseBaseModels.d.ts" />

declare interface IFacebookProfile {
  facebookId: string
  name: string
  email: string
  myAuthData: any
}

declare interface ITwitterProfile {
  twitterId: string
  username: string
  displayName: string
  email: string
  myAuthData: any
}

declare interface IParseModelUsersLinker extends IParseObjectId {
  username: string
}

declare interface IParseModelUsersAuthData {
  facebook?: any
  twitter?: any
}

declare interface IParseModelUsers extends IParseCommonModel, IParseModelUsersLinker {
  displayName: string
  slug: string
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
  facebookLinked: boolean
  twitterLinked: boolean
  authData?: IParseModelUsersAuthData
  // Verification
  sign_up_email_verify_token?: string
  sign_up_email_verify_token_expires_at?: Date
  deletion_email_verify_token?: string
  deletion_email_verify_token_expires_at?: Date
  reset_email_verify_token?: string
  reset_email_verify_token_expires_at?: Date
  defaultAvatarUrl?: string

  listPhotosDict?: IListPhotosDict<string>
}
