import firebase from 'firebase'
import { IFBUser } from 'ieattatypes/types/index'
import { slugifyToLower } from '~/database/slug_helper'
import { UserHelper } from '~/database/user_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

export class FirebaseHelper {
  private static getUserModel (model: IAuthUser): IFBUser {
    return {
      id: model.uid,
      createdAt: '',
      updatedAt: '',
      // Common(3)
      username: model.displayName,
      slug: slugifyToLower(model.displayName),
      email: model.email,
      // Property(4)
      loginType: 'google',
      originalUrl: model.photoURL
    }
  }

  public static async onLoginAfterHook ($fireStore: firebase.firestore.Firestore, model: IAuthUser) {
    const user = this.getUserModel(model)
    await UserHelper.uploadUser($fireStore, user)
  }
}
