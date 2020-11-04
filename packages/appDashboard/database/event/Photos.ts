import firebase from 'firebase'
import { IFBPhoto } from 'ieattatypes/types/index'
import { photos } from '~/database/data/Photos'
import { FBCollections } from '~/database/constant'
import { getCreatorIdDict } from '~/database/event/userUid'

export const uploadPhotos = async ($fireAuth: firebase.auth.Auth, $fireStore: firebase.firestore.Firestore) => {
  const creatorIdDict = await getCreatorIdDict($fireAuth)
  for (const index in photos) {
    await uploadPhoto($fireStore, creatorIdDict, photos[index])
  }
}

const fixCreatorId = (creatorIdDict, photo: IFBPhoto) => {
  const creatorId: any = photo.creatorId
  let fixedCreatorId = creatorId
  if (Object.keys(creatorIdDict).includes(creatorId)) {
    fixedCreatorId = creatorIdDict[creatorId]
  }
  return Object.assign(
    photo,
    {
      creatorId: fixedCreatorId
    }
  )
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
