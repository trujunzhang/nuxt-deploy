import firebase from 'firebase'
import { IFBPhoto } from 'ieattatypes/types/index'
import { loadWaiters } from '~/database/data/Waiters'
import { FBCollections } from '~/database/constant'
import { fixCreatorId, getCreatorIdDict } from '~/database/event/userUid'

export const uploadWaiters = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadWaiters()) {
    await uploadWaiter($fireStore, creatorIdDict, loadWaiters()[index])
  }
}

const uploadWaiter = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, waiter: IFBPhoto) => {
  // const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(waiter.restaurantId)
  //   .collection(FBCollections.Waiters).doc(waiter.uniqueId)
  const messageRef = $fireStore.collection(FBCollections.Photos).doc(waiter.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, waiter))
    }
  } catch (e) {
    alert(e)
  }
}
