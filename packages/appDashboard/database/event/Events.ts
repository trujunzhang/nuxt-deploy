import firebase from 'firebase'
import { IFBEvent } from 'ieattatypes/types/index'
import { events } from '~/database/data/Events'
import { FBCollections } from '~/database/constant'
import { getCreatorIdDict } from '~/database/event/userUid'

export const uploadEvents = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in events) {
    await uploadEvent($fireStore, events[index])
  }
}

const uploadEvent = async ($fireStore: firebase.firestore.Firestore, event: IFBEvent) => {
  const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(event.restaurantId as any)
    .collection(FBCollections.Events).doc(event.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(event)
    }
  } catch (e) {
    alert(e)
  }
}
