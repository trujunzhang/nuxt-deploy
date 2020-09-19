import firebase from 'firebase'
import { IFBEvent } from 'ieattatypes'
import { events } from '~/database/data/Events'
import { FBCollections } from '~/database/constant'

export const uploadEvents = async ($fireStore: firebase.firestore.Firestore) => {
  for (const index in events) {
    await uploadEvent($fireStore, events[index])
  }
}

const uploadEvent = async ($fireStore: firebase.firestore.Firestore, event: IFBEvent) => {
  const messageRef = $fireStore.collection(FBCollections.Events).doc(event.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(event)
    }
  } catch (e) {
    alert(e)
  }
}
