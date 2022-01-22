import firebase from 'firebase/compat'
import { IFBPeopleInEvent } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'
import { fixCreatorId, getCreatorIdDict } from '~/database/event/userUid'
import { loadPeopleInEvent } from '~/database/data/PeopleInEvents'

export const uploadPeopleInEvents = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadPeopleInEvent()) {
    await uploadPeopleInEvent($fireStore, creatorIdDict, loadPeopleInEvent()[index])
  }
}

const uploadPeopleInEvent = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, peopleInEvent: IFBPeopleInEvent) => {
  // const messageRef = $fireStore.collection(FBCollections.Restaurants).doc(peopleInEvent.restaurantId)
  //   .collection(FBCollections.Events).doc(peopleInEvent.eventId)
  //   .collection(FBCollections.PeopleInEvent).doc(peopleInEvent.uniqueId)
  const messageRef = $fireStore.collection(FBCollections.PeopleInEvent).doc(peopleInEvent.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, peopleInEvent))
    }
  } catch (e) {
    alert(e)
  }
}
