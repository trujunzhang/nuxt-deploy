import firebase from 'firebase'
import { IFBEvent } from 'ieattatypes/types/index'
import { loadEvents } from '~/database/data/Events'
import { FBCollections } from '~/database/constant'
import { fixCreatorId, getCreatorIdDict } from '~/database/event/userUid'

export const uploadEvents = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadEvents()) {
    await uploadEvent($fireStore, creatorIdDict, loadEvents()[index])
  }
}

const uploadEvent = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, event: IFBEvent) => {
  // const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(event.restaurantId)
  //   .collection(FBCollections.Events).doc(event.uniqueId)
  const messageRef = $fireStore.collection(FBCollections.Events).doc(event.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, event))
    }
  } catch (e) {
    alert(e)
  }
}
