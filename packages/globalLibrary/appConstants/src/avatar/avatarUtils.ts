import { StatusConstants } from '../constants'

import { AvatarURISourceWithNull, IAvatarProps } from '@app/avatar'

import { ParseModelImageHelper } from './parseModelImageHelper'

import * as Types from '../types'

export class AvatarUtils {
  private object: any = null
  private avatarType: string | null

  constructor(object: any, avatarType: string | null = null) {
    this.object = object
    this.avatarType = avatarType
  }

  getAvatarProperties(avatarURISource: AvatarURISourceWithNull): IAvatarProps {
    if (!!avatarURISource) {
      return {
        src: avatarURISource.uri
      }
    }

    if (typeof this.object === 'undefined') {
      return {}
    }

    // step1:  when the 'avatarType' is null, accoring to user's loginType.
    if (typeof this.avatarType === 'undefined') {
      const userAvatarType = this.object.loginType
      switch (userAvatarType) {
        case StatusConstants.USERS.TYPE_FACEBOOK:
          return {
            facebookId: this.object.facebook_id,
            name: this.object.displayName
          }
        case StatusConstants.USERS.TYPE_TWITTER:
          return {
            twitterHandle: this.object.twitterHandle,
            name: this.object.displayName
          }
        case StatusConstants.USERS.TYPE_EMAIL:
          return {
            email: this.object.email,
            name: this.object.displayName
          }
      }
    }

    // step2: Using for the connectionUser.
    const { authData } = this.object
    switch (this.avatarType) {
      case Types.userConnected.USER_CONNECT_VIA_FACEBOOK: {
        const { facebook } = authData || { facebook: null }
        if (!!facebook) {
          const facebookId = facebook.id
          return {
            facebookId
          }
        }
        break
      }
      case Types.userConnected.USER_CONNECT_VIA_TWITTER: {
        const { twitter } = authData || { twitter: null }
        if (!!twitter) {
          const twitterHandle = twitter.screen_name
          return {
            twitterHandle
          }
        }
        break
      }

      case Types.userConnected.USER_CONNECT_VIA_NAME: {
        return {
          email: this.object.email,
          name: this.object.displayName
        }
      }
    }

    // step3: When users have already upload images as their avatar.
    const coverImage = ParseModelImageHelper.getUserCoverUrl(this.object)
    if (coverImage !== '') {
      return {
        src: coverImage
      }
    }

    // step4: Above all, can not get user's avatar.
    // Using user's email as default
    return {
      email: this.object.email
    }
  }
}
