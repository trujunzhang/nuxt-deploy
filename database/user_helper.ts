import firebase from 'firebase'
import { IFBUser } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'
export type SingleUserCB = (user: IFBUser | null) => void

export class UserHelper {
  static async uploadUser ($fireStore: firebase.firestore.Firestore, model: IFBUser) {
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

  static getSingleUserFromId (
    userId: string,
    $fireStore: firebase.firestore.Firestore,
    cb: SingleUserCB
  ) {
    const nextQuery = $fireStore.collection(FBCollections.Users).doc(userId)
    nextQuery.get().then(
      (documentSnapshot) => {
        // console.log('.........')
        // const size = docmentSnapshot.size
        // const empty = documentSnapshot.empty
        const data = documentSnapshot.data()
        const user: IFBUser | null = documentSnapshot.data() as IFBUser
        cb(user)
      }
    ).catch((ex) => {
      cb(null)
    })
  }
}
