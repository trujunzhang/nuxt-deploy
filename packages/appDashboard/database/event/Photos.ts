import firebase from 'firebase'
import { IFBPhoto } from 'ieattatypes'
import { photos } from '~/database/data/Photos'
import { FBCollections } from '~/database/constant'

export const uploadPhotos = async ($fireStore: firebase.firestore.Firestore) => {
  for (const index in photos) {
    await uploadPhoto($fireStore, photos[index])
  }
}

const uploadPhoto = async ($fireStore: firebase.firestore.Firestore, photo: IFBPhoto) => {
  const messageRef = $fireStore.collection(FBCollections.Photos).doc(photo.uniqueId)
  try {
    const doc = await messageRef.get()
    if (!doc.data()) {
      await messageRef.set(photo)
    }
  } catch (e) {
    alert(e)
  }
}
