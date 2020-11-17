import firebase from 'firebase'
import { IFBPhoto } from 'ieattatypes/types/index'
import { loadPhotos } from '~/database/data/Photos'
import { FBCollections } from '~/database/constant'
import { getCreatorIdDict, fixCreatorId } from '~/database/event/userUid'

export const uploadPhotos = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in loadPhotos()) {
    await uploadPhoto($fireStore, creatorIdDict, loadPhotos()[index])
  }
}

const uploadPhoto = async ($fireStore: firebase.firestore.Firestore, creatorIdDict, photo: IFBPhoto) => {
  const messageRef = $fireStore.collection(FBCollections.Photos).doc(photo.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(fixCreatorId(creatorIdDict, photo))
    }
  } catch (e) {
    alert(e)
  }
}
