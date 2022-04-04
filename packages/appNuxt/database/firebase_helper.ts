import firebase from 'firebase/compat'
import { IFBUser } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FBCollections } from '~/database/constant'
import { ParseModelUsers } from '~/database/appModel/users'

export class FirebaseHelper {
  static async createUser ($fireStore: firebase.firestore.Firestore, model: IFBUser) {
    const messageRef = $fireStore.collection(FBCollections.Users).doc(model.id)
    try {
      const doc = await messageRef.get()
      if (!doc.data()) {
        await messageRef.set(model)
      }
      // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }

  public static async onLoginAfterHook ($fireStore: firebase.firestore.Firestore, model: IAuthUser) {
    const user = ParseModelUsers.getUserModel(model)
    await FirebaseHelper.createUser($fireStore, user)
  }
}
